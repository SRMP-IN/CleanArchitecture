using Application.WeatherForecast.Commands;
using Application.WeatherForecast.Queries;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;

namespace HostApi.Controllers
{
    public class WeatherForecastController : ApiControllerBase
    {
        [HttpGet] 
        public async Task<IActionResult> GetAsync([FromQuery] int? Id)
        {

            if (Id == null)
            {
                return Ok(await Mediator.Send(new GetWeatherForecastsQuery()));
            }
            else
            {
                var d = RandomNumberGenerator.GetInt32(1,100).ToString();
                var Te = RandomNumberGenerator.GetInt32(0, 100);
                var reuest = new CreateWeatherForecastsCommand { Date = DateTime.Now, Summary = $" Summary~{d}~Summary", TemperatureC = Te };
                var r = await Mediator.Send(reuest);

                return Ok(r);

            }


        }



    }
}