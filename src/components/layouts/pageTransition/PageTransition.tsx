"use client";
import { motion } from "framer-motion";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export interface IPageTransition
  extends React.ComponentPropsWithoutRef<"div"> {}

const variants = {
  hidden: { opacity: 0, x: -200, y: 32 },
  enter: { opacity: 1, x: 32, y: 32 },
  exit: { opacity: 0, x: -200, y: 32 },
};

const PageTransition: React.FC<IPageTransition> = ({ children }) => {
  // 使用 useRouter 获取路由实例
  const router = useRouter();
  // 使用 usePathname 获取当前路径
  const pathname = usePathname();
  // 使用 useSearchParams 获取查询参数对象
  const searchParams = useSearchParams();

  // 如果你需要构建 asPath 这样的字符串
  const pageKey = `${pathname}?${searchParams}`;

  return (
    <motion.div
      key={pageKey}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }} //
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
