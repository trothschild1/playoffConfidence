import { Theme } from "@radix-ui/themes"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
            {children}
        </Theme>
      </body>
    </html>
  )
}