using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using GptApi.Services;
using GptApi.models;


namespace GptApi.Controllers
{
    [ApiController]
    [Route("api/gpt")]
    public class GptController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public GptController(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
        }

        [HttpPost("interpret")]
        public async Task<IActionResult> InterpretCommand([FromBody] CommandRequest input)
        {
            var prompt = PromptBuilder.BuildCommandInterpretationPrompt(input.Text);

            var payload = new
            {
//              model = "phi3:mini",
                model = "gemma3n",
                prompt = prompt,
                stream = false
            };

            var content = new StringContent(JsonSerializer.Serialize(payload), Encoding.UTF8, "application/json");

            var response = await _httpClient.PostAsync("http://localhost:11434/api/generate", content);
            var resultJson = await response.Content.ReadAsStringAsync();

            using var doc = JsonDocument.Parse(resultJson);
            var output = doc.RootElement.GetProperty("response").GetString();

            return Ok(new { command = output });

        }
    }

}
