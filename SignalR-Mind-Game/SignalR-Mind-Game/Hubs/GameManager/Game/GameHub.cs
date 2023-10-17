namespace Hubs.GameManager.Game;

using Microsoft.AspNetCore.SignalR;
using Hubs.GameManager.GameManager;

public class GameHub : Hub<IGameClient>
{
    Game? _game;

    public override Task OnConnectedAsync()
    {

        return base.OnConnectedAsync();
    }

    private void tryToFillGameObject(string gameId)
    {

        if (_game == null)
        {
            _game = GameManager.GetGame(Guid.Parse(gameId));
        }

        if (_game == null)
        {
            Clients.Caller.GameNotFound();
        }
    }

    public void registerUserToGame(string gameId)
    {

        tryToFillGameObject(gameId);
        _game?.Connect(Clients.Caller);


    }

    public void Play(long index, string gameId)
    {
        tryToFillGameObject(gameId);
        _game?.Play(index);
    }
}