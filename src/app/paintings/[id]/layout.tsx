import GameProvider from "@/context/gameProvider";

const PaintingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <GameProvider>
      {children}
    </GameProvider>
  )
}

export default PaintingsLayout;