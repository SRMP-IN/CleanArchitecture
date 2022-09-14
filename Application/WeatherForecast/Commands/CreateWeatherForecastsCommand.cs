using Application.Common.Interfaces;
using Application.WeatherForecast.Queries;
using MediatR;

namespace Application.WeatherForecast.Commands
{
    public record class CreateWeatherForecastsCommand : Queries.WeatherForecastDto, IRequest<Queries.WeatherForecastDto>
    { 
    }

    public class CreateWeatherForecastsCommandHandler : IRequestHandler<CreateWeatherForecastsCommand, Queries.WeatherForecastDto>
    {
        private readonly IApplicationDbContext _context;

        public CreateWeatherForecastsCommandHandler(IApplicationDbContext context)
        {
            this._context = context;
        }

        public async Task<WeatherForecastDto> Handle(CreateWeatherForecastsCommand request, CancellationToken cancellationToken)
        {
            var entity = new Domain.Entities.WeatherForecast
            {
                Date = request.Date,
                Summary = request.Summary,
                TemperatureC = request.TemperatureC
            };
            await _context.WeatherForecasts.AddAsync(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return new WeatherForecastDto
            {
                Date = entity.Date,
                Summary = entity.Summary,
                TemperatureC = entity.TemperatureC
            };
        }
    }
}