using System.Collections.Generic;
namespace CCTracking.Dto.Response
{
    public class NearestCentreResponse : BaseModelResponse
    {
        public NearestCentre NearestCentreModel { get; set; }
        public List<NearestCentre> NearestCentreList { get; set; }
    }


    public class NearestCentreGridResponse : BaseModelResponse
    {
        public List<NearestCentreGrid> NearestCentreList { get; set; }
    }
}
