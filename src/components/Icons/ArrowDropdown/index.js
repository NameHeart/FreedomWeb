export default function ArrowDropdown({
  color = '#216fed',
  translate = '0 13.274',
  rotate = '-90',
  width = '19.81',
  height = '11.274'
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 21.81 13.274"
    >
      <path
        id="Union_80"
        data-name="Union 80"
        d="M9.644,21.21.623,12.515a2,2,0,0,1-.616-1.61,2,2,0,0,1,.616-1.61L9.644.6a2.183,2.183,0,0,1,3.007,0,2,2,0,0,1,0,2.9L4.966,10.905l7.684,7.407a2,2,0,0,1,0,2.9,2.183,2.183,0,0,1-3.007,0Z"
        transform={`translate(${translate}) rotate(${rotate})`}
        fill={color}
        opacity="0.998"
      />
    </svg>
  );
}
