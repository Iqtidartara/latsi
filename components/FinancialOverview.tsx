import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const financialData = [
  { title: 'PURCHASE PRICE', value: '$96,000.00', imageSrc: "/finacialoverview/keyicon1.png", color: 'bg-[#07B05F]' },
  { title: 'DEPOSIT', value: '$96,000.00', imageSrc: "/finacialoverview/keyicon2.png", color: 'bg-yellow-500' },
  { title: 'WEEKLY RENT', value: '$96,000.00', imageSrc: "/finacialoverview/keyicon3.png", color: 'bg-blue-500' },
  { title: 'MORTGAGE REPAYMENTS', value: '$96,000.00', imageSrc: "/finacialoverview/keyicon4.png", color: 'bg-cyan-500' },
  { title: 'NET MONTHLY INCOME', value: '$96,000.00', imageSrc: "/finacialoverview/keyicon5.png", color: 'bg-pink-500' },
  { title: 'MONTHLY INCOME AFTER TAX SAVINGS', value: '$96,000.00', imageSrc: "/finacialoverview/Key Icons 6.png", color: 'bg-purple-500' },
];

export default function FinancialOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-6 w-full">
      {financialData.map((item, index) => (
        <Card key={index} className={`${item.color} text-white overflow-hidden shadow-lg`}>
          <CardContent className="px-4 py-8">
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-full bg-white">
                {/* Correctly using item.imageSrc to display the image */}
                <Image src={item.imageSrc} alt="icon" width={38} height={38} className="h-16 w-16 object-fit" />
              </div>
              <div className="flex flex-col items-start justify-between">
                <p className="text-sm font-semibold text-[#000]">{item.title}</p>
                <p className="text-2xl font-bold">{item.value}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
