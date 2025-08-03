var builder = WebApplication.CreateBuilder(args);


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.WithOrigins("http://172.20.193.1:2020","http://localhost:4200")
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

// ✅ پیام تست ساده برای روت اصلی (اختیاری)
app.MapGet("/", () => "API server is running ✅");

app.Run();
