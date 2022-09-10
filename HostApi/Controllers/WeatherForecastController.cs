using Application.WeatherForecast.Queries;
using Microsoft.AspNetCore.Mvc;

namespace HostApi.Controllers
{
    public class WeatherForecastController : ApiControllerBase
    {
        [HttpGet(Name = "GetWeatherForecast")]
        public async Task<IEnumerable<WeatherForecastDto>> GetAsync()
        {
            return await Mediator.Send(new GetWeatherForecastsQuery());
        }
    }
}