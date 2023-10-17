using Microsoft.AspNetCore.SignalR;

namespace HowSignalRWorks.Hubs.GameManager.Game
{
    internal class Game
    {
        private object sync = new();
        private List<long> clickedCats = new List<long>();
        private int clickedCount = 0;

        public Game()
        {
            Id = Guid.NewGuid();

        }

        public Guid Id { get; internal set; }

        public List<IGameClient> Players { get; private set; } = new();

        public IGameClient? CurrentPlayer { get; private set; }

        public void Connect(IGameClient player)
        {
            lock (sync)
            {
                Players.Add(player);
            }

            if (Players.Count == 2)
            {
                // it is possible to randomize who will starts playing
                CurrentPlayer = Players[0];
                StartRound();
            }
        }

        private void StartRound()
        {
            Players.ForEach(x => x.CurrentPlayerIs(x == CurrentPlayer));
        }

        private IGameClient? OpponentOf(IGameClient? player)
        {   
            if(player == null)
            {
                return null;
            }

            return Players.Single(x => x != player);
        }

        internal void Play(long index)
        {
            lock (sync)
            {

                Players.ForEach(x => x.UserPlayed(index));
                Thread.Sleep(1000);
                Players.ForEach(x => x.ContinuePlaying());

                if (clickedCount == clickedCats.Count)
                {
                    clickedCats.Add(index);
                    clickedCount = 0;
                    CurrentPlayer = OpponentOf(CurrentPlayer);
                    StartRound();

                }
                else
                {
                    if (index == clickedCats[clickedCount])
                    { 
                        clickedCount++;
                    }
                    else
                    {
                        CurrentPlayer?.YouLoseGame();
                        OpponentOf(CurrentPlayer)?.YouWinGame();

                        Thread.Sleep(5000);
                        Players.ForEach(x => x.ReturnToLobby());
                    }
                }
            }
        }
    }
}