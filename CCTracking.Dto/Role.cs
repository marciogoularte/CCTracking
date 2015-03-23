namespace CCTracking.Dto
{
    
    public class Role : BaseModel
    {
        public string Name { get; set; }
    }

    public class RoleGrid : BaseModelGrid
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
