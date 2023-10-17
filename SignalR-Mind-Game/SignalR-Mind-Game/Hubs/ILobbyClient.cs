public interface ILobbyClient
{
    Task NewPlayerJoinedLobby();
    Task StartGame(Guid gameId);
    Task YouAreWaitingToOpponent();
}