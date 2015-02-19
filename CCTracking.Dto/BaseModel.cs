using System;

namespace CCTracking.Dto
{
    public class BaseModel
    {
        public int Id { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public bool IsActive { get; set; }
        public string ErrorMessage { get; set; }
        public string EntityType { get; set; }

    }

    public class BaseModelGrid
    {

    }
}
