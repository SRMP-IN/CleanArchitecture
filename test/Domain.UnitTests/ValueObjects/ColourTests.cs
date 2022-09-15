using Domain.ValueObjects;
using FluentAssertions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.UnitTests.ValueObjects
{
     

    public class ColourTests
    {
        [Test]
        [TestCase("#FF5733")]
        [TestCase("#FFC300")]
        [TestCase("#FFFF66")]
        [TestCase("#FFFFFF")]

        public void ShouldReturnCorrectColourCode(string ColorCode)
        {
            var code = ColorCode;// "#FFFFFF";

            var colour = Colour.From(code);

            //colour.Code.Should().Be(code);

            Assert.That(colour.Code, Is.EqualTo(code));
        }

       

        [Test]
        public void ImplicitColourCodeToString()
        {
            var color =(string) Colour.White;

            Assert.That(color, Is.EqualTo("#FFFFFF"));

        }
        [Test]
        public void ExceptionColourCodeToString()
        {
            var color = (Colour)"#FFFFFF";

            Assert.That(color, Is.EqualTo(Colour.White));

        }
        [Test]
        public void ToStringRetrunCode()
        {
            var color = Colour.White;

            Assert.That(color.Code, Is.EqualTo(color.ToString()));

        }

       

    }
}
