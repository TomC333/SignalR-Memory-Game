using HowSignalRWorks.Hubs.GameManager.Game;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSignalR();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapHub<LobbyHub>("/lobby");
app.MapHub<GameHub>("/game");
app.Run();