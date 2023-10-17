using Hubs.GameManager.GameManager;
using Microsoft.AspNetCore.SignalR;

public class LobbyHub : Hub<ILobbyClient>
{
    private object sync = new();

    static ILobbyClient? ActivePlayer { get; set; }
    static long? ActivePlayerId { get; set; }

    public async override Task<Task> OnConnectedAsync()
    {

        try
        {
            await Clients.All.NewPlayerJoinedLobby();

        }catch (Exception)
        {

        }

        return base.OnConnectedAsync();
    }

    public void Play(long id)
    {
        lock (sync)
        {  

            if (ActivePlayer == null)
            {      

                ActivePlayer = Clients.Caller;
                Clients.Caller.YouAreWaitingToOpponent();
                ActivePlayerId = id;
                
            }
            else
            {

                if (ActivePlayerId != id)
                {

                    var gameId = GameManager.CreateGame();

                    Clients.Caller.StartGame(gameId);
                    ActivePlayer.StartGame(gameId);

                    ActivePlayer = null;
                }
            }
        }
    }
}