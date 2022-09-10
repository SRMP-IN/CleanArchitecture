using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks; 
using Microsoft.EntityFrameworkCore;


namespace Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {

        DbSet<Domain.Entities.WeatherForecast>  WeatherForecasts { get; }


        Task<int> SaveChangesAsync(CancellationToken cancellationToken);


    }
}
