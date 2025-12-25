interface TreeProps {
  zPosition: number;
}

const Tree: React.FC<TreeProps> = ({ zPosition }) => {
  return (
    <div
      className="tree"
      style={{
        transform: `translateX(-${Math.abs(zPosition)}px) translateZ(50px) rotateY(180deg)`,
      }}
    >
      <div className="tree__canopy" />
      <div className="tree__trunk" />
    </div>
  );
};

export default Tree;
