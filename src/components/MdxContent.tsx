import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

const components = {
  h1: (props: React.ComponentProps<"h1">) => (
    <h1 className="text-3xl font-bold text-foreground mt-10 mb-4" {...props} />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="text-2xl font-bold text-foreground mt-8 mb-3" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="text-xl font-semibold text-foreground mt-6 mb-2" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="text-zinc-300 leading-relaxed mb-4" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a
      className="text-brand-purple-light hover:text-brand-pink-light underline underline-offset-2 transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="list-disc pl-6 space-y-2 mb-4 text-zinc-300" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="list-decimal pl-6 space-y-2 mb-4 text-zinc-300" {...props} />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li className="text-zinc-300" {...props} />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-2 border-brand-purple pl-4 italic text-zinc-400 my-4"
      {...props}
    />
  ),
  code: (props: React.ComponentProps<"code">) => (
    <code
      className="bg-surface px-1.5 py-0.5 rounded text-brand-pink-light text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: React.ComponentProps<"pre">) => (
    <pre
      className="bg-[#18181b] rounded-lg p-4 overflow-x-auto my-4 text-sm font-mono border border-zinc-800"
      {...props}
    />
  ),
  img: (props: React.ComponentProps<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-lg my-6 max-w-full" alt={props.alt ?? ""} {...props} />
  ),
  hr: () => <hr className="border-zinc-800 my-8" />,
  table: (props: React.ComponentProps<"table">) => (
    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm text-zinc-300" {...props} />
    </div>
  ),
  th: (props: React.ComponentProps<"th">) => (
    <th className="text-left font-semibold text-foreground px-3 py-2 border-b border-zinc-700" {...props} />
  ),
  td: (props: React.ComponentProps<"td">) => (
    <td className="px-3 py-2 border-b border-zinc-800" {...props} />
  ),
};

interface MdxContentProps {
  source: string;
}

export default function MdxContent({ source }: MdxContentProps) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: "github-dark-dimmed",
                keepBackground: true,
              },
            ],
          ],
        },
      }}
    />
  );
}
