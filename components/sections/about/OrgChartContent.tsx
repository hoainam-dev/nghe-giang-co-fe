import TreeNode from "@/components/sections/about/TreeNode";

export default function OrgChartContent() {
  return (
    <div className="mx-auto w-[800px] md:w-[925px]">
      <TreeNode label="CT HĐTV" tone="gold" />
      <div className="mx-auto h-8 w-px bg-slate-300" />

      <TreeNode label="Giám đốc" tone="primary" />
      <div className="mx-auto h-8 w-px bg-slate-300" />

      <div className="relative mx-auto h-8 max-w-[760px]">
        <div className="absolute top-0 right-[8%] left-[8%] h-px bg-slate-300" />
        <div className="absolute top-0 left-[8%] h-8 w-px bg-slate-300" />
        <div className="absolute top-0 left-1/2 h-8 w-px bg-slate-300" />
        <div className="absolute top-0 right-[8%] h-8 w-px bg-slate-300" />
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div>
          <TreeNode label="P. Kế toán tài chính" />
        </div>

        <div>
          <TreeNode label="P. Kinh doanh" />
          <div className="mx-auto h-8 w-px bg-slate-300" />

          <div className="relative mx-auto h-8 max-w-[260px]">
            <div className="absolute top-0 right-[25%] left-[25%] h-px bg-slate-300" />
            <div className="absolute top-0 left-[25%] h-8 w-px bg-slate-300" />
            <div className="absolute top-0 right-[25%] h-8 w-px bg-slate-300" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <TreeNode label="QLKV Tây Nguyên" />
              <div className="mx-auto h-6 w-px bg-slate-300" />
              <TreeNode label="NVTT các địa bàn" />
            </div>

            <div>
              <TreeNode label="QLKV Miền Trung" />
              <div className="mx-auto h-6 w-px bg-slate-300" />
              <TreeNode label="NVTT các địa bàn" />
            </div>
          </div>
        </div>

        <div>
          <TreeNode label="P. Logistics" />
          <div className="mx-auto h-8 w-px bg-slate-300" />

          <div className="relative mx-auto h-8 max-w-[260px]">
            <div className="absolute top-0 right-[25%] left-[25%] h-px bg-slate-300" />
            <div className="absolute top-0 left-[25%] h-8 w-px bg-slate-300" />
            <div className="absolute top-0 right-[25%] h-8 w-px bg-slate-300" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <TreeNode label="QL đội xe tải lớn" />
              <div className="mx-auto h-6 w-px bg-slate-300" />
              <TreeNode label="Hệ thống kho Tây Nguyên" />
            </div>

            <div>
              <TreeNode label="QL đội xe tải nhỏ" />
              <div className="mx-auto h-6 w-px bg-slate-300" />
              <TreeNode label="Hệ thống kho Miền Trung" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
