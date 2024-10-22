


import type { Metadata } from "next";
import SectionSlug from '@/components/SectionSlug';


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug;  // Lấy slug từ params
  const title = `Gói ${slug} - Massage thư giãn cho Nam giới`;
  const description = "Massage thư giãn cho Nam giới hấp dẫn đạt chuẩn TOP tại Sài Thành.";
  
  return {
    title,
    description,
  };
}

const DetailService = () => {

  return (
    <div>
      <SectionSlug  />
    </div>
  );
};

export default DetailService;
