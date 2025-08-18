var builder = WebApplication.CreateBuilder(args);


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddControllers();
builder.Services.AddHttpClient();

var app = builder.Build();

app.UseCors("AllowAll");


app.UseHttpsRedirection();

app.MapControllers();

app.MapGet("/", () => "API server is running ✅");

app.Run();
