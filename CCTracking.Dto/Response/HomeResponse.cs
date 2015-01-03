using System.Collections.Generic;
namespace CCTracking.Dto.Response
{
    public class HomeResponse : BaseModelResponse
    {
        public Home HomeModel { get; set; }
        public List<Home> HomeList { get; set; }
    }
}
