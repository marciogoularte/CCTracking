using System.Collections.Generic;

namespace CCTracking.Dto.Response
{
    public class LandmarkResponse : BaseModelResponse
    {
        public Landmark LandmarkModel { get; set; }
        public List<Landmark> LandmarkList { get; set; }
    }
}
