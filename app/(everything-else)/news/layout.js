export const metadata = {
    title: "Tin tức | Nhựa Thành Phát",
    description:
      "Tin tuc",
      keywords: [
        "cửa nhựa",
        "cửa",
        "sàn",
        "trần",
        "nhà máy",
        "nhựa",
        "sản xuất",
        "nhập khẩu"
    
      ],
      openGraph: {
        url: "https://www.nhuathanhphat.vn/",
        type: "article",
        title: "Công ty cổ phần năng lượng Thành Phát",
        description:
          "Nhựa Thành Phát - Sản phẩm nhựa uy tín hàng đầu Việt Nam",
      },
      twitter: {
        card: "summary_large_image",
        title: "Công ty cổ phần năng lượng Thành Phát",
        description:
          "Nhựa Thành Phát - Sản phẩm nhựa uy tín hàng đầu Việt Nam",
        creator: "@thanhphat",
        site: "@thanhphat",
      },
      alternates: {
        canonical: "https://www.nhuathanhphat.vn/"
      }
  };
export default function NewsLayout({ children }) {
  return <>{children}</>;
}