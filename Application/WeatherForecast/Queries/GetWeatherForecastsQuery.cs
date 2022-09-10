using Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.WeatherForecast.Queries
{
    public record GetWeatherForecastsQuery : IRequest<IEnumerable<WeatherForecastDto>>
    {
        

        public int CountryId { get; init; }
        public int PageNumber { get; init; } = 1;
        public int PageSize { get; init; } = 10;
    }

    public class GetWeatherForecastsQueryHandler : IRequestHandler<GetWeatherForecastsQuery, IEnumerable<WeatherForecastDto>>
    {
        private readonly IApplicationDbContext _context;

        public GetWeatherForecastsQueryHandler(IApplicationDbContext context)
        {
            this._context = context;
        }

        public async Task<IEnumerable<WeatherForecastDto>> Handle(GetWeatherForecastsQuery request, CancellationToken cancellationToken)
        {
            IEnumerable<WeatherForecastDto> data = await _context.WeatherForecasts.Select(x => new WeatherForecastDto
            {
                Date = x.Date,
                Summary = x.Summary,
                TemperatureC = x.TemperatureC
            }).ToListAsync();

            return data;

           
        }

        
    }
}