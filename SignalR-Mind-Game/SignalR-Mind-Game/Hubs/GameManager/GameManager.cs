namespace HowSignalRWorks.Hubs.GameManager.Game;

static class GameManager
{
    public static List<Game> Games { get; private set; } = new();

    public static Guid CreateGame()
    {
        var game = new Game();
        Games.Add(game);
        return game.Id;
    }

    internal static Game? GetGame(Guid gameId)
    {
        return Games.FirstOrDefault(x => x.Id == gameId);
    }
}
