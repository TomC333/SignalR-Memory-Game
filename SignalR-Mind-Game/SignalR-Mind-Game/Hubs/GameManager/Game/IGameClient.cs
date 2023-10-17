namespace Hubs.GameManager.Game
{
    public interface IGameClient
    {
        Task AllPlayersJoined();
        Task ContinuePlaying();
        Task CurrentPlayerIs(bool you);
        Task GameNotFound();
        Task ItsNotYourTurn();
        Task PlayerMadeMove(int catIndex);
        Task ReturnToLobby();
        Task UserPlayed(long index);
        Task YouLoseGame();
        Task YouWinGame();
    }
}