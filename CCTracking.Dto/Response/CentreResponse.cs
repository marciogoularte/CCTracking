using System.Collections.Generic;

namespace CCTracking.Dto.Response
{
    public class CentreResponse : BaseModelResponse
    {
        public AlkhidmatCentre CentreModel { get; set; }
        public List<AlkhidmatCentre> CentreList { get; set; }
    }
}
