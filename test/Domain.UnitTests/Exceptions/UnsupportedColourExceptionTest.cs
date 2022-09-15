using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Exceptions;
using FluentAssertions.Equivalency;

namespace Domain.UnitTests.Exceptions
{
    public class UnsupportedColourExceptionTest
    {
        [Test]
        public void ShouldReturnUnsupportedColourException()
        {
            var UnsupportedColour = "#FFC300";
            var ex = Assert.Throws<UnsupportedColourException>(() => throw new UnsupportedColourException(UnsupportedColour));
            Assert.That(ex.Message, Is.EqualTo($"Colour \"{UnsupportedColour}\" is unsupported."));

        }

    }
}


