import ProductInfoListItem from "@/components/cards/ProductInfoListItem";
import ProductInfoCard from "@/components/cards/PorductInfoCard";

type ProductInfoListCardProps = {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  items: string[];
};

export default function ProductInfoListCard({
  icon,
  eyebrow,
  title,
  items,
}: ProductInfoListCardProps) {
  return (
    <ProductInfoCard icon={icon} eyebrow={eyebrow} title={title}>
      <div className="space-y-3">
        {items.map((item) => (
          <ProductInfoListItem key={item} item={item} iconTone="gold" />
        ))}
      </div>
    </ProductInfoCard>
  );
}
