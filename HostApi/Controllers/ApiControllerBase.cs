
using Microsoft.AspNetCore.Mvc;
using MediatR;

namespace HostApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public abstract class ApiControllerBase : ControllerBase
    {
        private ISender _mediator = null!;

        protected ISender Mediator
        {
            get
            {
                return _mediator ??= HttpContext.RequestServices.GetRequiredService<ISender>();
            }
        }
    }
}
