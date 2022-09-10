using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class WeatherForecast
    {
        [Key]
        public int Id { get; set; }


        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }


        public int TemperatureF { get; set; }
        //{
        //    get
        //    {
        //        return 32 + (int)(TemperatureC / 0.5556);
        //    }
        //    set { }
        //}

        public string? Summary { get; set; }
    }
}
 