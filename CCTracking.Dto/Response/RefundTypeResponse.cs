using System.Collections.Generic;

namespace CCTracking.Dto.Response
{
    public class RefundTypeResponse : BaseModelResponse
    {
        public RefundType RefundTypeModel { get; set; }
        public List<RefundType> RefundTypeList { get; set; }
    }
}
