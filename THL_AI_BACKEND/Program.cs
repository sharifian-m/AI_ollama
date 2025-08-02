var builder = WebApplication.CreateBuilder(args);

// اضافه کردن CORS برای ارتباط با Angular
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:4200") // آدرس Angular
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddControllers();
builder.Services.AddHttpClient();
builder.Services.AddOpenApi();

var app = builder.Build();

// فعال‌سازی Swagger فقط در حالت توسعه
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// فعال‌سازی CORS قبل از Controllerها
app.UseCors("AllowFrontend");

app.UseHttpsRedirection();

app.MapControllers(); // برای فعال شدن APIهای Controller

app.Run();
