using MediatR;

namespace Application.WeatherForecast.Queries
{
    public record GetWeatherForecastsQuery : IRequest<IEnumerable<WeatherForecastDto>>
    {
        public int CountryId { get; init; }
        public int PageNumber { get; init; } = 1;
        public int PageSize { get; init; } = 10;
    }

    public class GetWeatherForecastsQueryHandler : RequestHandler<GetWeatherForecastsQuery, IEnumerable<WeatherForecastDto>>
    {
        private static readonly string[] Summaries = new[] {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
            };

        protected override IEnumerable<WeatherForecastDto> Handle(GetWeatherForecastsQuery request)
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecastDto
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}