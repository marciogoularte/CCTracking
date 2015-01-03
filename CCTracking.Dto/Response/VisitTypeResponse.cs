using System.Collections.Generic;

namespace CCTracking.Dto.Response
{
    public class VisitTypeResponse : BaseModelResponse
    {
        public VisitType VisitTypeModel { get; set; }
        public List<VisitType> VisitTypeList { get; set; }
    }
}
