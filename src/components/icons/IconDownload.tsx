/* eslint-disable max-len */
interface IconDownloadProps {
  size?: number
  color?: string
}

function IconDownload({ size = 24, color = '#202020' }: IconDownloadProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4496 17.4C10.8461 17.4 10.2425 17.1 9.84018 16.7L6.31947 13.3C6.0177 13 6.0177 12.5 6.31947 12.2C6.62125 11.9 7.1242 11.9 7.42598 12.2L10.7455 15.5V2.8C10.7455 2.3 11.1479 2 11.5502 2C11.9526 2 12.2544 2.3 12.1538 2.8V15.4L15.4733 12.1C15.7751 11.8 16.2781 11.8 16.5798 12.1C16.8816 12.4 16.8816 12.9 16.5798 13.2L13.0591 16.7C12.6567 17.2 12.0532 17.4 11.4496 17.4ZM18.4911 18.1999C18.4911 17.6999 18.8935 17.3999 19.2959 17.3999C19.6982 17.3999 20 17.7999 20 18.1999V19.6999C20 20.9999 18.9941 21.9999 17.6864 21.9999H5.31361C4.00592 21.9999 3 20.9999 3 19.6999V18.1999C3 17.7999 3.20118 17.3999 3.70414 17.3999C4.2071 17.3999 4.50888 17.7999 4.50888 18.1999V19.6999C4.50888 20.0999 4.91124 20.4999 5.31361 20.4999H17.6864C18.0888 20.4999 18.4911 20.0999 18.4911 19.6999V18.1999Z"
        fill={color}
      />
    </svg>
  )
}

export default IconDownload