import Image, { ImageLoader } from 'next/image';

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loader?: ImageLoader;
}

const CustomImage = ({ src, alt, width, height, loader, ...rest }: CustomImageProps) => {
  return <Image src={src} alt={alt} width={width} height={height} loader={loader} {...rest} />;
};

export default CustomImage;
