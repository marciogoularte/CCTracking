namespace CCTracking.Dto
{
    public class Lookup : BaseModel
    {
        public string Description { get; set; }
        public string OtherDetail { get; set; }
        public int ParentId { get; set; }
    }
}
