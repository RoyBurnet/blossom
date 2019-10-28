import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './cultureMap.css';

class cultureMap extends Component {
  handleClick = () => {
    console.log('click');
  };
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="367mm"
        height="250mm"
        version="1.1"
        viewBox="0 0 467 350"
      >
        <defs>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="#fff"
              fillOpacity="1"
              fillRule="evenodd"
              stroke="#000"
              strokeOpacity="1"
              strokeWidth="1.067"
              d="M-4.616 0l6.92-4v8z"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="none"
              fillOpacity="0.75"
              fillRule="evenodd"
              stroke="#000"
              strokeOpacity="1"
              strokeWidth="0.533"
              d="M0 2.26v-4.52"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="none"
              fillOpacity="0.75"
              fillRule="evenodd"
              stroke="#000"
              strokeOpacity="1"
              strokeWidth="0.533"
              d="M0 2.26v-4.52"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="#000"
              fillOpacity="1"
              fillRule="evenodd"
              stroke="#000"
              strokeOpacity="1"
              strokeWidth="1.067"
              d="M4.616 0l-6.92 4v-8z"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="#000"
              fillOpacity="1"
              fillRule="evenodd"
              stroke="#000"
              strokeLinejoin="round"
              strokeOpacity="1"
              strokeWidth="0.688"
              d="M10.69 4.437L-1.328.017 10.69-4.401c-1.92 2.61-1.909 6.18 0 8.84z"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="none"
              fillOpacity="0.75"
              fillRule="evenodd"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="0.533"
              d="M0 2.26v-4.52"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="none"
              fillOpacity="0.75"
              fillRule="evenodd"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="0.533"
              d="M0 2.26v-4.52"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="#fff"
              fillRule="evenodd"
              stroke="#000"
              strokeOpacity="1"
              strokeWidth="0.267"
              d="M.554 0l-1.73 1v-2z"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="none"
              fillOpacity="0.75"
              fillRule="evenodd"
              stroke="#000"
              strokeOpacity="1"
              strokeWidth="1.067"
              d="M0 4.52v-9.04"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="none"
              fillOpacity="0.75"
              fillRule="evenodd"
              stroke="#000"
              strokeOpacity="1"
              strokeWidth="1.067"
              d="M0 4.52v-9.04"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              className="osso1 street"
              fill="#ff00e1"
              fillOpacity="1"
              fillRule="evenodd"
              stroke="#ff00e1"
              strokeOpacity="1"
              strokeWidth="1.067"
              d="M-10 0l-4 4L0 0l-14-4z"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              className="osso1"
              fill="#ff00e1"
              fillOpacity="1"
              fillRule="evenodd"
              stroke="#ff00e1"
              strokeLinejoin="round"
              strokeOpacity="1"
              strokeWidth="0.688"
              d="M10.69 4.437L-1.328.017 10.69-4.401c-1.92 2.61-1.909 6.18 0 8.84z"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              className="osso1"
              fill="#0000ff"
              fillOpacity="1"
              fillRule="evenodd"
              stroke="#ff00e1"
              strokeOpacity="1"
              strokeWidth="0.267"
              d="M1.2 0l1-1-3.5 1 3.5 1z"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="none"
              fillOpacity="0.75"
              fillRule="evenodd"
              stroke="#000"
              strokeOpacity="1"
              strokeWidth="1.067"
              d="M0 4.52v-9.04"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="none"
              fillOpacity="0.75"
              fillRule="evenodd"
              stroke="#000"
              strokeOpacity="1"
              strokeWidth="1.067"
              d="M0 4.52v-9.04"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="#000"
              fillOpacity="1"
              fillRule="evenodd"
              stroke="#000"
              strokeLinejoin="round"
              strokeOpacity="1"
              strokeWidth="0.188"
              d="M-1.926-1.21L1.352-.005l-3.278 1.206a2.05 2.05 0 000-2.411z"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="#000"
              fillOpacity="1"
              fillRule="evenodd"
              stroke="#000"
              strokeLinejoin="round"
              strokeOpacity="1"
              strokeWidth="0.688"
              d="M10.69 4.437L-1.328.017 10.69-4.401c-1.92 2.61-1.909 6.18 0 8.84z"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="#e6bf00"
              fillOpacity="1"
              fillRule="evenodd"
              stroke="#e6bf00"
              strokeLinejoin="round"
              strokeOpacity="1"
              strokeWidth="0.375"
              d="M5.231 2.42L-1.324.01 5.23-2.401C4.184-.978 4.19.969 5.231 2.42z"
            ></path>
          </marker>
          <color-profile
            name="sRGB-IEC61966-2.1"
            xlinkHref="C:\\WINDOWS\\system32\\spool\\drivers\\color\\sRGB Color Space Profile.icm"
          ></color-profile>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="#000"
              fillOpacity="1"
              fillRule="evenodd"
              stroke="#000"
              strokeLinejoin="round"
              strokeOpacity="1"
              strokeWidth="0.688"
              d="M10.69 4.437L-1.328.017 10.69-4.401c-1.92 2.61-1.909 6.18 0 8.84z"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="none"
              fillOpacity="0.75"
              fillRule="evenodd"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="0.533"
              d="M0 2.26v-4.52"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="none"
              fillOpacity="0.75"
              fillRule="evenodd"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="0.533"
              d="M0 2.26v-4.52"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="none"
              fillOpacity="0.75"
              fillRule="evenodd"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="0.533"
              d="M0 2.26v-4.52"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="none"
              fillOpacity="0.75"
              fillRule="evenodd"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="0.533"
              d="M0 2.26v-4.52"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="#fff"
              fillOpacity="1"
              fillRule="evenodd"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="1.067"
              d="M-4.616 0l6.92-4v8z"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="none"
              fillOpacity="0.75"
              fillRule="evenodd"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="0.533"
              d="M0 2.26v-4.52"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              fill="none"
              fillOpacity="0.75"
              fillRule="evenodd"
              stroke="#fff"
              strokeOpacity="1"
              strokeWidth="0.533"
              d="M0 2.26v-4.52"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              className="osso1"
              fill="#ff00e1"
              fillOpacity="1"
              fillRule="evenodd"
              stroke="#ff00e1"
              strokeLinejoin="round"
              strokeOpacity="1"
              strokeWidth="0.688"
              d="M10.69 4.437L-1.328.017 10.69-4.401c-1.92 2.61-1.909 6.18 0 8.84z"
            ></path>
          </marker>
          <marker orient="auto" overflow="visible" refX="0" refY="0">
            <path
              className="osso1"
              fill="#ff00e1"
              fillOpacity="1"
              fillRule="evenodd"
              stroke="#ff00e1"
              strokeOpacity="1"
              strokeWidth="1.067"
              d="M-10 0l-4 4L0 0l-14-4z"
            ></path>
          </marker>
        </defs>
        <g display="none">
          <image
            width="674.102"
            height="489.424"
            x="-45.606"
            y="-243.257"
            display="inline"
            opacity="0.834"
            preserveAspectRatio="none"
            transform="translate(0 140) rotate(.148)"
            xlinkHref="C:\\Users\\Yos Purwanto\\Documents\\1. stille kades\\4. Opdrachten\\2018 mapping culture\\kaart\\vb kaart2.PNG"
          ></image>
        </g>
        <path
          fill="#000"
          fillOpacity="1"
          fillRule="nonzero"
          stroke="none"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="55.403"
          d="M1220.464 523.059l35.187-.94 5.269.926 3.355 7.993.303 5.164-82.59 70.505 19.173 22.865 126.64-101.668c17.383 8.716 32.9 20.357 48.605 33.791 35.364 41.608 67.444 81.046 83.533 127.89 13.563 58.31 15.733 122.147 13.848 188.587l.04-.813c-2.109 36.626 9.535 71.623 38.14 90.037 28.604 18.415 65.433 19.361 110.13 10.91l.502-.095 200.854-45.602v-56.814l-211.838 48.092c-37.626 7.082-60.269 2.969-69.662-3.078-9.411-6.059-14.272-14.925-12.814-40.26l.022-.406.01-.399c1.96-69.115.048-138.178-15.583-204.353l-.296-1.262-.412-1.233c-20.428-60.524-59.45-106.207-95.88-149.025l-1.395-1.633-1.625-1.402c-39.824-34.3-90.802-65.427-162.44-65.186a250.01 250.01 0 00-6.997.123l-2.127.067-2.096.39c-25.803 4.826-56.308 14.63-95.176 31.89l-.656.296-.148.074 38.037 51.17zm-165.776 183.07l-4.839 1.31a51189.394 51189.394 0 00-15.838-11.677l-.37-5.29 12.55-25.702c44.427-49.348 89.15-87.741 127.62-120.35l-37.867-50.936c-66.34 34.512-115.356 87.18-156.368 161.858-6.55 10.36-8.1 15.246-12.765 24.694l94.389 59.088 133.177-104.538-19.172-22.87zm-93.866-15.875c-7.613 15.82-12.798 28.552-18.597 41.793-9.535 21.768-19.174 40.492-39.405 62.666-59.09 54.49-107.651 102.25-179.732 125.185l.158 3.512-13.36 1.828-.107-2.511a284.592 284.592 0 01-27.906 6.955c-93.4 18.216-176.766 13.557-266.553 1.086-145.73-23.741-295.319-70.926-445.933-107.053l-.313 1.303v55.625c144.05 35.164 290.587 80.937 437.623 104.86l.319.054.316.043c92.73 12.9 183.743 18.242 285.17-1.543l.016-.006h.015c94.355-18.5 164.89-73.543 228.324-130.768l132.889-104.853zM723.617 927.182l.17 3.779-13.568 1.83-.162-3.773zm.34 7.656l.162 3.78-13.56 1.724-.17-3.772zm.332 7.551l.162 3.78-13.56 1.726-.17-3.774zm.123 7.345l.164 3.779-13.353 1.932-.17-3.771zm.334 7.238l.168 3.78-13.36 2.244-.17-3.771zm.332 7.553l.17 3.78-13.36 2.244-.163-3.772zm.54 7.134l.17 3.78-13.567 2.66-.164-3.77z"
          baselineShift="baseline"
          clipRule="nonzero"
          color="#000"
          colorInterpolation="sRGB"
          colorInterpolationFilters="linearRGB"
          colorRendering="auto"
          direction="ltr"
          display="inline"
          dominantBaseline="auto"
          enableBackground="accumulate"
          fontFamily="sans-serif"
          fontSize="medium"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          imageRendering="auto"
          letterSpacing="normal"
          opacity="1"
          overflow="visible"
          shapeRendering="auto"
          textAnchor="start"
          textDecoration="none"
          textRendering="auto"
          transform="translate(0 53) matrix(.26458 0 0 .26458 0 -53)"
          vectorEffect="none"
          visibility="visible"
          style={{
            lineHeight: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantPosition: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantAlternates: 'normal',
            fontFeatureSettings: 'normal',
            WebkitTextIndent: '0',
            textIndent: '0',
            WebkitTextAlign: 'start',
            textAlign: 'start',
            WebkitTextDecorationLine: 'none',
            textDecorationLine: 'none',
            WebkitTextDecorationStyle: 'solid',
            textDecorationStyle: 'solid',
            WebkitTextDecorationColor: '#000000',
            textDecorationColor: '#000000',
            WebkitTextTransform: 'none',
            textTransform: 'none',
            WebkitTextOrientation: 'mixed',
            textOrientation: 'mixed',
            whiteSpace: 'normal',
            shapePadding: '0',
            isolation: 'auto',
            mixBlendMode: 'normal',
            solidColor: '#000000',
            solidOpacity: '1'
          }}
          wordSpacing="normal"
          writingMode="lr-tb"
        ></path>
        <g
          fill="#000"
          fillOpacity="1"
          stroke="none"
          display="inline"
          fontFamily="Futura LT Book"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="bold"
          letterSpacing="0"
          wordSpacing="0"
          writingMode="lr-tb"
        >
          <flowRoot
            display="inline"
            fontSize="18.667"
            textAnchor="start"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            transform="matrix(.26458 0 0 .26458 6.234 -.935)"
            xmlSpace="preserve"
          >
            <flowRegion fontSize="18.667">
              <path
                d="M1331.289 428.043H1582.231V485.771H1331.289z"
                fontSize="18.667"
              ></path>
            </flowRegion>
            <flowPara>Maasboulevard</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="18.667"
            textAnchor="start"
            transform="matrix(.26458 0 0 .26458 -13.56 1.714)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion fontSize="18.667">
              <path
                d="M892.435 565.296H1060.908V610.065H892.435z"
                fontSize="18.667"
              ></path>
            </flowRegion>
            <flowPara>witte de with</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="18.667"
            textAnchor="start"
            transform="matrix(.26458 0 0 .26458 -5.455 3.74)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion fontSize="18.667">
              <path
                d="M818.802 378.562H973.1370000000001V423.92H818.802z"
                fontSize="18.667"
              ></path>
            </flowRegion>
            <flowPara>kruisplein</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="18.667"
            textAnchor="start"
            transform="matrix(.26458 0 0 .26458 -7.793 7.325)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion fontSize="18.667">
              <path
                d="M301.602 450.428H520.735V495.786H301.602z"
                fontSize="18.667"
              ></path>
            </flowRegion>
            <flowPara>Mathenesserplein</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="18.667"
            textAnchor="start"
            transform="matrix(.26458 0 0 .26458 -19.638 4.987)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion fontSize="18.667">
              <path
                d="M1348.372 630.093H1553.9560000000001V680.164H1348.372z"
                fontSize="18.667"
              ></path>
            </flowRegion>
            <flowPara>Helderheidplein</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="18.667"
            textAnchor="start"
            transform="matrix(.26458 0 0 .26458 5.51 5.951)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion fontSize="18.667">
              <path
                d="M938.031 1136.228H1151.124V1191.674H938.031z"
                fontSize="18.667"
              ></path>
            </flowRegion>
            <flowPara>Pleinweg</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="18.667"
            textAnchor="start"
            transform="matrix(.26458 0 0 .26458 13.404 16.21)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion fontSize="18.667">
              <path
                d="M1218.778 884.57H1324.81V905.187H1218.778z"
                fontSize="18.667"
              ></path>
            </flowRegion>
            <flowPara>Afrikaanderplein</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="8"
            textAnchor="start"
            transform="matrix(.26458 0 0 .26458 13.803 -4.329)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion fontSize="8">
              <path
                d="M457.704 662.492H701.577V725.5219999999999H457.704z"
                fontSize="8"
              ></path>
            </flowRegion>
            <flowPara>Heemraadplein</flowPara>
            <flowPara>(Pracinha d&apos; Quibrod)</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="18.667"
            textAnchor="start"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            transform="matrix(.26458 0 0 .26458 -19.079 -21.054)"
            xmlSpace="preserve"
          >
            <flowRegion fontSize="18.667">
              <path
                d="M1349.55 271.352H1537.462V321.423H1349.55z"
                fontSize="18.667"
              ></path>
            </flowRegion>
            <flowPara>vlietlaan</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="18.667"
            textAnchor="start"
            transform="matrix(.26458 0 0 .26458 6.69 31.938)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion fontSize="18.667">
              <path
                d="M843.543 392.11H1045.593V449.838H843.543z"
                fontSize="18.667"
              ></path>
            </flowRegion>
            <flowPara>skatepark</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="16.554"
            textAnchor="middle"
            transform="rotate(-.891 2564.048 -60.628) scale(.29834)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'center',
              textAlign: 'center'
            }}
            xmlSpace="preserve"
          >
            <flowRegion
              fill="#000"
              fillOpacity="1"
              fontFamily="Futura LT Book"
              fontSize="16.554"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'center',
                textAlign: 'center'
              }}
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="middle"
              writingMode="lr-tb"
            >
              <path
                fill="#000"
                fillOpacity="1"
                d="M280 423.701H439.35900000000004V472.42900000000003H280z"
                fontFamily="Futura LT Book"
                style={{
                  InkscapeFontSpecification: "'Futura LT Book, Bold'",
                  fontVariantLigatures: 'normal',
                  fontVariantCaps: 'normal',
                  fontVariantNumeric: 'normal',
                  fontFeatureSettings: 'normal',
                  WebkitTextAlign: 'center',
                  textAlign: 'center'
                }}
                fontSize="16.554"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
                textAnchor="middle"
                writingMode="lr-tb"
              ></path>
            </flowRegion>
            <flowPara>metrostation delfshaven</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="16.554"
            textAnchor="start"
            transform="rotate(-1.055 1374.756 4536.46) scale(.29834)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion
              fill="#000"
              fillOpacity="1"
              fontFamily="Futura LT Book"
              fontSize="16.554"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              <path
                fill="#000"
                fillOpacity="1"
                d="M509.231 454.47H617.427V475.345H509.231z"
                fontFamily="Futura LT Book"
                style={{
                  InkscapeFontSpecification: "'Futura LT Book, Bold'",
                  fontVariantLigatures: 'normal',
                  fontVariantCaps: 'normal',
                  fontVariantNumeric: 'normal',
                  fontFeatureSettings: 'normal',
                  WebkitTextAlign: 'start',
                  textAlign: 'start'
                }}
                fontSize="16.554"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
                textAnchor="start"
                writingMode="lr-tb"
              ></path>
            </flowRegion>
            <flowPara>de markt</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="8"
            textAnchor="start"
            transform="matrix(.26458 0 0 .26458 4.364 -6.546)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion>
              <path d="M624.999 849.815H713.359V882.214H624.999z"></path>
            </flowRegion>
            <flowPara>Mullerpier</flowPara>
            <flowPara>veldjes</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="8"
            textAnchor="start"
            transform="matrix(.26458 0 0 .26458 .623 -10.13)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion>
              <path d="M730.442 810.936H813.5V838.033H730.442z"></path>
            </flowRegion>
            <flowPara>Euromastpark</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="16.554"
            textAnchor="start"
            transform="rotate(-1.128 1262.862 -2505.769) scale(.29834)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion
              fill="#000"
              fillOpacity="1"
              fontFamily="Futura LT Book"
              fontSize="16.554"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              <path
                fill="#000"
                fillOpacity="1"
                d="M376.552 313.701H548.966V368.184H376.552z"
                fontFamily="Futura LT Book"
                style={{
                  InkscapeFontSpecification: "'Futura LT Book, Bold'",
                  fontVariantLigatures: 'normal',
                  fontVariantCaps: 'normal',
                  fontVariantNumeric: 'normal',
                  fontFeatureSettings: 'normal',
                  WebkitTextAlign: 'start',
                  textAlign: 'start'
                }}
                fontSize="16.554"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
                textAnchor="start"
                writingMode="lr-tb"
              ></path>
            </flowRegion>
            <flowPara>kade</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="7.095"
            textAnchor="start"
            transform="translate(134.523 106.257) scale(.29834)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion
              fill="#000"
              fillOpacity="1"
              fontFamily="Futura LT Book"
              fontSize="7.095"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              <path
                fill="#000"
                fillOpacity="1"
                d="M669.655 475.08H804.827V521.287H669.655z"
                fontFamily="Futura LT Book"
                style={{
                  InkscapeFontSpecification: "'Futura LT Book, Bold'",
                  fontVariantLigatures: 'normal',
                  fontVariantCaps: 'normal',
                  fontVariantNumeric: 'normal',
                  fontFeatureSettings: 'normal',
                  WebkitTextAlign: 'start',
                  textAlign: 'start'
                }}
                fontSize="7.095"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
                textAnchor="start"
                writingMode="lr-tb"
              ></path>
            </flowRegion>
            <flowPara>Afrikaanderplein</flowPara>
          </flowRoot>
        </g>
        <g
          fill="#000"
          fillOpacity="1"
          fillRule="nonzero"
          stroke="none"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="2"
          clipRule="nonzero"
          color="#000"
          colorInterpolation="sRGB"
          colorInterpolationFilters="linearRGB"
          colorRendering="auto"
          direction="ltr"
          display="inline"
          dominantBaseline="auto"
          fontFamily="sans-serif"
          fontSize="medium"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          imageRendering="auto"
          letterSpacing="normal"
          shapeRendering="auto"
          textAnchor="start"
          textRendering="auto"
          visibility="visible"
          wordSpacing="normal"
          writingMode="lr-tb"
        >
          <path
            d="M220.939 147.234l.198.521 5.496-2.076-.193-.537zm6.202-2.358l.194.537 2.534-.957-.193-.544zm3.236-1.231l.194.545 3.614-1.366-.218-.545zm4.328-1.646l.218.547 2.603-.985-.211-.555zm-13.302 6.457l.247.648 5.467-2.08-.23-.64zm6.186-2.337l.23.638 6.89-2.62-.245-.617zm7.612-2.877l.245.615 2.58-.981-.233-.613zM75.893 175.5l-.165.531 5.61 1.75.178-.54zm6.34 1.963l-.18.542 2.587.807.182-.547zm3.307 1.023l-.183.55 3.688 1.15.164-.564zm4.422 1.37l-.165.565 2.657.829.176-.568zm-14.455-3.108l-.205.662 5.588 1.73.213-.646zm6.312 1.97l-.213.644 7.044 2.18.185-.636zm7.768 2.423l-.185.635 2.636.817.194-.627zM231.149 42.268l-.283.48 5.056 2.992.298-.485zm5.718 3.367l-.299.487 2.331 1.38.304-.49zm2.983 1.757l-.304.492 3.325 1.967.29-.51zm3.99 2.35l-.29.511 2.395 1.417.301-.512zm-13.355-6.348l-.351.598 5.04 2.968.356-.58zm5.691 3.368l-.355.578 6.354 3.741.327-.577zm7.004 4.144l-.327.575 2.378 1.4.333-.564zM215.137 32.806l-.283.48 5.057 2.992.298-.486zm5.718 3.367l-.298.487 2.33 1.38.304-.49zm2.984 1.756l-.304.493 3.324 1.967.29-.51zm3.99 2.35l-.291.512 2.395 1.417.302-.512zm-13.355-6.347l-.352.597 5.04 2.968.357-.58zm5.69 3.367l-.354.579 6.353 3.74.327-.576zm7.004 4.144l-.326.576 2.378 1.4.332-.565zM359.95 83.722l-.283.48 5.056 2.992.298-.486zm5.718 3.367l-.299.487 2.332 1.38.303-.49zm2.983 1.756l-.304.492 3.325 1.967.29-.51zm3.99 2.35l-.29.512 2.395 1.417.301-.513zm-13.354-6.347l-.352.597 5.04 2.968.357-.58zm5.69 3.367l-.355.579 6.354 3.74.327-.576zm7.004 4.144l-.327.576 2.379 1.4.332-.565zM331.449 54.508l.52.237 1.081-2.484-.524-.24zm1.374-3.177l.526.241 1.542-3.542-.542-.224zm1.84-4.249l.543.225 1.11-2.552-.545-.236zm-2.011 7.973l.618.28 2.927-6.766-.612-.253zm3.247-7.462l.612.253 1.096-2.533-.602-.26zM368.662 274.818l-.544-.12-1.267 5.738.554.132zm-1.417 6.483l-.556-.132-.584 2.645.56.136zm-.738 3.382l-.563-.135-.832 3.772.575.116zm-.989 4.524l-.577-.117-.6 2.718.581.127zm1.867-14.668l-.677-.148-1.249 5.715.662.157zm-1.425 6.457l-.66-.157-1.574 7.203.65.13zm-1.754 7.946l-.649-.13-.589 2.696.64.14zM364.769 293.605l-.545-.12-1.266 5.738.554.132zm-1.417 6.483l-.556-.132-.584 2.645.56.135zm-.739 3.382l-.562-.136-.832 3.773.575.115zm-.988 4.523l-.577-.116-.6 2.718.581.126zm1.867-14.668l-.677-.147-1.249 5.714.662.158zm-1.426 6.458l-.66-.157-1.573 7.203.65.13zm-1.753 7.946l-.649-.131-.59 2.697.641.14zM315.894 245.668l-.429.356 3.75 4.523.444-.356zm4.245 5.1l-.445.357 1.728 2.086.452-.36zm2.216 2.66l-.453.36 2.466 2.974.444-.383zm2.962 3.558l-.446.384 1.777 2.142.456-.38zm-10.428-10.482l-.533.443 3.743 4.496.531-.426zm4.22 5.09l-.53.425 4.718 5.666.503-.433zm5.194 6.265l-.502.432 1.766 2.121.504-.42zM101.82 182.733l-.094.564 2.678.406.098-.569zm3.425.51l-.098.571 3.82.578.076-.581zm4.579.684l-.077.584 2.751.416.088-.588zm-8.222.11l-.112.669 7.292 1.087.087-.657zm8.046 1.217l-.087.656 2.73.408.096-.649zM147.403 163.509l.16.548 2.588-.801-.16-.555zm3.304-1.032l.16.556 3.69-1.144-.184-.557zm4.42-1.38l.184.559 2.658-.825-.177-.567zm-7.353 3.68l.19.651 7.038-2.198-.208-.63zm7.773-2.41l.207.629 2.635-.822-.196-.626zM159.076 159.896l.166.531 5.612-1.739-.16-.546zm6.334-1.978l.16.548 2.588-.801-.16-.555zm3.305-1.032l.16.555 3.69-1.144-.184-.557zm4.42-1.38l.184.559 2.658-.825-.177-.567zm-13.67 5.637l.207.662 5.583-1.744-.19-.653zm6.316-1.957l.19.651 7.039-2.198-.209-.63zm7.773-2.41l.207.629 2.635-.823-.196-.626zM176.34 154.49l.46.34 1.574-2.204-.462-.344zm2.006-2.82l.464.344 2.246-3.143-.484-.332zm2.684-3.774l.485.333 1.617-2.264-.484-.345zm-3.628 7.38l.546.403 4.273-6.009-.546-.375zm4.731-6.622l.545.375 1.6-2.25-.534-.38zM201.247 140.424l-.193-.522-5.514 2.03.188.537zm-6.222 2.306l-.19-.54-2.542.936.19.545zm-3.246 1.203l-.19-.546-3.625 1.335.213.546zm-4.342 1.61l-.214-.55-2.61.963.206.557zm13.356-6.345l-.24-.65-5.486 2.034.225.642zm-6.205 2.285l-.224-.64-6.914 2.562.241.618zm-7.637 2.812l-.24-.617-2.588.96.229.614zM64.896 171.661l-.197.536 2.556.898.201-.54zm3.27 1.14l-.202.542 3.645 1.279.183-.557zm4.371 1.524l-.184.559 2.626.92.195-.56zM64.44 172.9l-.235.637 6.962 2.426.208-.63zm7.679 2.695l-.208.628 2.606.909.216-.62zM255.005 313.353l-.202.519 5.472 2.14.216-.527zm6.185 2.404l-.217.528 2.523.987.22-.533zm3.227 1.253l-.221.535 3.598 1.407.203-.55zm4.315 1.678l-.204.552 2.592 1.013.215-.554zm-14.2-4.117l-.252.646 5.453 2.119.258-.63zm6.157 2.408l-.257.628 6.872 2.67.23-.621zm7.579 2.964l-.23.62 2.573 1 .237-.61zM272.52 320l-.202.519 5.472 2.14.216-.527zm6.186 2.403l-.217.529 2.523.987.22-.533zm3.227 1.254l-.221.535 3.597 1.406.204-.55zm4.315 1.678l-.204.552 2.592 1.013.215-.554zm-14.201-4.117l-.251.646 5.452 2.118.258-.63zm6.158 2.408l-.257.628 6.872 2.67.23-.621zm7.579 2.964l-.23.62 2.573 1 .237-.611zM237.299 306.44l-.202.52 5.471 2.14.216-.527zm6.185 2.404l-.217.529 2.523.987.22-.533zm3.227 1.254l-.221.535 3.598 1.406.203-.55zm4.315 1.677l-.204.552 2.592 1.014.215-.554zm-14.201-4.117l-.251.646 5.452 2.12.258-.63zm6.158 2.409l-.257.628 6.872 2.67.23-.622zm7.579 2.964l-.23.62 2.573 1 .237-.611zM362.757 122.182l-.321.455 4.791 3.4.338-.46zm5.42 3.829l-.337.46 2.209 1.568.343-.464zm2.829 1.996l-.344.466 3.15 2.235.331-.485zm3.781 2.671l-.331.487 2.27 1.61.343-.486zm-12.784-7.428l-.4.566 4.778 3.374.403-.548zm5.393 3.826l-.401.547 6.022 4.253.374-.548zm6.637 4.708l-.373.547 2.255 1.592.378-.536zM345.046 115.377l-.198.521 5.492 2.09.21-.53zm6.207 2.347l-.212.53 2.532.965.215-.535zm3.238 1.224l-.216.537 3.61 1.373.199-.552zm4.33 1.638l-.198.554 2.601.989.21-.556zm-14.238-3.986l-.245.648 5.472 2.069.252-.632zm6.18 2.351l-.251.63 6.897 2.608.224-.624zm7.606 2.894l-.224.623 2.582.976.231-.613zM378.132 133.14l-.401.387 4.07 4.236.418-.388zm4.608 4.775l-.418.39 1.877 1.953.424-.392zm2.405 2.49l-.425.394 2.677 2.785.415-.415zm3.215 3.332l-.417.416 1.929 2.006.427-.413zm-11.169-9.69l-.498.482 4.062 4.209.498-.463zm4.582 4.768l-.497.463 5.121 5.305.47-.469zm5.64 5.868l-.47.467 1.917 1.986.472-.456zM179.23 117.136l.193.523 5.515-2.025-.187-.538zm6.225-2.3l.188.54 2.543-.934-.188-.545zm3.247-1.2l.189.547 3.626-1.332-.213-.547zm4.343-1.605l.213.549 2.612-.96-.206-.557zm-13.362 6.331l.24.65 5.487-2.028-.224-.642zm6.207-2.279l.224.641 6.916-2.556-.24-.618zm7.64-2.804l.238.617 2.59-.957-.228-.615z"
            baselineShift="baseline"
            display="inline"
            enableBackground="accumulate"
            opacity="1"
            overflow="visible"
            textDecoration="none"
            vectorEffect="none"
            style={{
              lineHeight: 'normal',
              fontVariantLigatures: 'normal',
              fontVariantPosition: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontVariantAlternates: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextIndent: '0',
              textIndent: '0',
              WebkitTextAlign: 'start',
              textAlign: 'start',
              WebkitTextDecorationLine: 'none',
              textDecorationLine: 'none',
              WebkitTextDecorationStyle: 'solid',
              textDecorationStyle: 'solid',
              WebkitTextDecorationColor: '#000000',
              textDecorationColor: '#000000',
              WebkitTextTransform: 'none',
              textTransform: 'none',
              WebkitTextOrientation: 'mixed',
              textOrientation: 'mixed',
              whiteSpace: 'normal',
              shapePadding: '0',
              isolation: 'auto',
              mixBlendMode: 'normal',
              solidColor: '#000000',
              solidOpacity: '1'
            }}
          ></path>
        </g>
        <g
          fill="#000"
          fillOpacity="1"
          stroke="none"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="bevel"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.579"
          display="inline"
          paintOrder="fill markers stroke"
        >
          <path
            d="M329.099 247.738l-3.097 2.594 1.484 1.749 1.592-1.334 1.22 1.457 1.485-1.261zm3.17 3.786l-1.484 1.26.098.118 2.437-.125zm1.543 1.98l-3.485.18-.866.725 1.358 1.602zm-3.572 2.992l-1.603-1.889-1.599 1.358 1.582 1.888zm-2.094-2.466l-.466-.549-2.18.648 1.05 1.254zm-.997-1.175l-1.728-2.036-1.583 1.326 1.137 1.356zM196.965 208.148v4.04l2.293-.015v-2.077h1.9l-.013-1.948zm4.938 0l.013 1.948h.153l1.469-1.948zm2.508.09l-2.1 2.787v1.13l2.1-.014zm0 4.66l-2.477.015.014 2.097h2.463zm-3.235.02l-.72.005-.903 2.088h1.636zm-1.54.01l-2.671.018v2.065h1.77zM169.743 225.34v4.04l2.293-.014v-2.077h1.9l-.013-1.948zm4.939 0l.013 1.949h.153l1.469-1.948zm2.508.09l-2.1 2.787v1.13l2.1-.013zm0 4.66l-2.477.016.014 2.097h2.463zm-3.235.02l-.72.006-.903 2.087h1.636zm-1.541.01l-2.67.018v2.065h1.77zM144.175 185.335v4.04l2.293-.015v-2.077h1.9l-.013-1.948zm4.938 0l.013 1.948h.153l1.47-1.948zm2.509.09l-2.1 2.787v1.13l2.1-.014zm0 4.66l-2.478.015.014 2.097h2.464zm-3.236.02l-.72.006-.902 2.087h1.636zm-1.54.01l-2.67.018v2.065h1.77zM89.733 134.089v4.04l2.293-.015v-2.077h1.9l-.013-1.948zm4.938 0l.013 1.948h.153l1.469-1.948zm2.508.09l-2.1 2.786v1.13l2.1-.013zm0 4.659l-2.477.016.014 2.097h2.463zm-3.235.021l-.72.005-.903 2.087h1.636zm-1.54.01l-2.671.018v2.064h1.77zM159.604 102.129v4.04l2.293-.015v-2.077h1.9l-.013-1.948zm4.938 0l.013 1.948h.153l1.47-1.948zm2.509.09l-2.1 2.786v1.13l2.1-.013zm0 4.659l-2.477.016.014 2.097h2.463zm-3.236.02l-.72.006-.902 2.087h1.636zm-1.54.01l-2.67.018v2.065h1.77zM76.198 194.396l-2.825 2.888-1.63-1.614 1.453-1.485-1.358-1.328 1.372-1.384zm-3.53-3.453l-1.372 1.383-.109-.107.312-2.42zm-1.856-1.69l-.447 3.46-.79.808-1.493-1.478zm-3.258 3.33l1.76 1.744-1.477 1.49-1.761-1.723zm2.298 2.278l.51.507-.814 2.123-1.17-1.144zm1.094 1.085l1.896 1.88-1.443 1.476-1.266-1.238zM83.164 185.845l-1.112 3.884 2.209.617.571-1.997 1.827.523.524-1.876zm4.747 1.36l-.523 1.876.147.042 1.948-1.469zm2.387.776l-2.786 2.1-.31 1.087 2.022.565zm-1.282 4.48l-2.386-.667-.564 2.02 2.369.678zm-3.116-.87l-.694-.194-1.442 1.758 1.573.45zm-1.484-.415l-2.572-.718-.568 1.985 1.701.487zM94.709 177.677l-.98 3.918 2.228.543.504-2.015 1.843.46.46-1.893zm4.79 1.197l-.46 1.893.149.037 1.898-1.533zm2.412.696l-2.714 2.194-.274 1.095 2.041.497zm-1.13 4.52l-2.407-.586-.495 2.038 2.39.598zm-3.144-.764l-.7-.17-1.382 1.806 1.588.397zm-1.497-.364l-2.595-.63-.5 2.002 1.716.43zM82.918 167.902l-1.148 3.873-2.194-.665.59-1.991-1.822-.54.566-1.864zm-4.735-1.403l-.566 1.865-.147-.044-.855-2.285zm-2.43-.626l1.222 3.269-.32 1.083-2.011-.61zm-1.324 4.468l2.37.718-.608 2.007-2.362-.7zm3.096.939l.689.209.273 2.258-1.569-.465zm1.474.447l2.556.775-.586 1.98-1.697-.503zM131.927 164.365l1.115 3.882 2.2-.647-.573-1.996 1.826-.525-.55-1.869zm4.746-1.364l.55 1.869.147-.042.874-2.278zm2.436-.606l-1.25 3.258.312 1.086 2.015-.593zm1.286 4.478l-2.376.7.592 2.01 2.368-.68zm-3.104.914l-.69.203-.291 2.256 1.572-.452zm-1.477.435l-2.562.754.57 1.984 1.7-.489zM196.245 90.193l1.033 3.905 2.213-.6-.53-2.008 1.836-.486-.51-1.88zm4.774-1.263l.511 1.88.148-.039.922-2.259zm2.448-.554l-1.318 3.23.289 1.093 2.027-.55zm1.192 4.504l-2.391.65.55 2.023 2.38-.63zm-3.123.848l-.695.189-.339 2.248 1.582-.418zm-1.487.403l-2.577.7.528 1.996 1.711-.452zM200.178 106.034l1.28 3.832 2.17-.74-.658-1.97 1.802-.601-.63-1.844zm4.684-1.563l.63 1.843.144-.048.777-2.313zm2.408-.71l-1.11 3.309.357 1.071 1.989-.677zm1.475 4.42l-2.345.8.678 1.984 2.336-.78zm-3.062 1.045l-.681.232-.196 2.266 1.552-.518zm-1.458.497l-2.528.862.654 1.959 1.679-.56zM207.61 142.172l3.786-1.408-.813-2.144-1.946.724-.662-1.78-1.822.69zm-1.721-4.628l1.821-.692-.053-.143-2.338-.698zm-.79-2.383l3.344.998 1.058-.394-.744-1.964zm4.367-1.624l.878 2.317 1.96-.744-.858-2.31zm1.147 3.026l.256.673 2.27.118-.57-1.533zm.547 1.44l.947 2.497 1.935-.72-.617-1.658zM219.408 135.038l1.387 3.794 2.149-.8-.713-1.951 1.784-.653-.68-1.825zm4.638-1.695l.682 1.825.143-.052.711-2.335zm2.387-.777l-1.016 3.338.388 1.061 1.968-.733zm1.6 4.376l-2.321.866.733 1.964 2.313-.845zm-3.032 1.13l-.674.253-.131 2.27 1.536-.562zm-1.443.539l-2.502.933.708 1.94 1.663-.608zM238.357 128.726l1.29 3.828 2.169-.747-.664-1.968 1.8-.607-.635-1.842zm4.679-1.578l.635 1.842.145-.05.77-2.315zm2.405-.717l-1.1 3.312.361 1.07 1.987-.683zm1.49 4.415l-2.343.807.683 1.982 2.335-.787zm-3.06 1.054l-.68.235-.189 2.266 1.55-.523zm-1.456.502l-2.525.87.66 1.956 1.677-.565zM291.47 21.14v4.039l2.293-.015v-2.076h1.9l-.013-1.949zm4.938 0l.013 1.948h.153l1.47-1.949zm2.509.09l-2.101 2.786v1.13l2.1-.014zm0 4.658l-2.478.017.014 2.097h2.464zm-3.236.022l-.72.004-.903 2.088h1.636zm-1.54.01l-2.671.017v2.065h1.77zM372.068 178.645l-3.554 1.92 1.102 2.01 1.827-.987.903 1.673 1.708-.937zm2.346 4.346l-1.708.937.073.134 2.412.368zm1.113 2.25l-3.45-.525-.994.537 1.009 1.842zm-4.1 2.213l-1.191-2.172-1.839 1.008 1.17 2.168zm-1.556-2.837l-.346-.631-2.266.197.777 1.44zm-.74-1.35l-1.285-2.343-1.816.981.84 1.558zM74.057 165.06l-1.148 3.873-2.194-.665.59-1.991-1.822-.54.566-1.864zm-4.735-1.402l-.566 1.864-.147-.044-.855-2.285zm-2.43-.627l1.222 3.269-.32 1.083-2.011-.61zm-1.324 4.468l2.37.719-.608 2.006-2.362-.7zm3.096.939l.689.21.273 2.257-1.569-.465zm1.474.447l2.556.775-.586 1.98-1.697-.503z"
            display="inline"
            opacity="1"
          ></path>
        </g>
        <g
          fill="#000"
          fillOpacity="1"
          stroke="none"
          display="inline"
          fontFamily="Futura LT Book"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="bold"
          letterSpacing="0"
          textAnchor="start"
          wordSpacing="0"
          writingMode="lr-tb"
        >
          <flowRoot
            display="inline"
            fontSize="7.095"
            transform="rotate(-18.607 330.33 51.467) scale(.29834)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion
              fill="#000"
              fillOpacity="1"
              fontFamily="Futura LT Book"
              fontSize="7.095"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              <path
                fill="#000"
                fillOpacity="1"
                d="M699.31 124.046H766.896V173.012H699.31z"
                fontFamily="Futura LT Book"
                style={{
                  InkscapeFontSpecification: "'Futura LT Book, Bold'",
                  fontVariantLigatures: 'normal',
                  fontVariantCaps: 'normal',
                  fontVariantNumeric: 'normal',
                  fontFeatureSettings: 'normal',
                  WebkitTextAlign: 'start',
                  textAlign: 'start'
                }}
                fontSize="7.095"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
                textAnchor="start"
                writingMode="lr-tb"
              ></path>
            </flowRegion>
            <flowPara>hip</flowPara>
            <flowPara>hop</flowPara>
            <flowPara>huis</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="7.095"
            transform="rotate(-18.607 166.717 -108.337) scale(.29834)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion
              fill="#000"
              fillOpacity="1"
              fontFamily="Futura LT Book"
              fontSize="7.095"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              <path
                fill="#000"
                fillOpacity="1"
                d="M378.621 321.977H405.051V344.58799999999997H378.621z"
                fontFamily="Futura LT Book"
                style={{
                  InkscapeFontSpecification: "'Futura LT Book, Bold'",
                  fontVariantLigatures: 'normal',
                  fontVariantCaps: 'normal',
                  fontVariantNumeric: 'normal',
                  fontFeatureSettings: 'normal',
                  WebkitTextAlign: 'start',
                  textAlign: 'start'
                }}
                fontSize="7.095"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
                textAnchor="start"
                writingMode="lr-tb"
              ></path>
            </flowRegion>
            <flowPara>Kiem Foei</flowPara>
          </flowRoot>
          <text
            x="173.841"
            y="76.552"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-18.608 427.276 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="173.841"
              y="76.552"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              demonfuzz
            </tspan>
          </text>
          <text
            x="176.791"
            y="56.989"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-18.608 427.276 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="176.791"
              y="56.989"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              vinylspot
            </tspan>
          </text>
          <text
            x="158.242"
            y="59.205"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-18.608 427.276 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="158.242"
              y="59.205"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              de sjeik
            </tspan>
          </text>
          <text
            x="177.693"
            y="45.581"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-18.608 427.276 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="177.693"
              y="45.581"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              de ijssalon
            </tspan>
          </text>
          <text
            x="172.739"
            y="24.9"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-18.608 427.276 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="172.739"
              y="24.9"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              Ilya
            </tspan>
          </text>
          <flowRoot
            display="inline"
            fontSize="7.095"
            transform="rotate(-18.607 169.91 -142.642) scale(.29834)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion
              fill="#000"
              fillOpacity="1"
              fontFamily="Futura LT Book"
              fontSize="7.095"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              <path
                fill="#000"
                fillOpacity="1"
                d="M378.621 321.977H466.207V353.70099999999996H378.621z"
                fontFamily="Futura LT Book"
                style={{
                  InkscapeFontSpecification: "'Futura LT Book, Bold'",
                  fontVariantLigatures: 'normal',
                  fontVariantCaps: 'normal',
                  fontVariantNumeric: 'normal',
                  fontFeatureSettings: 'normal',
                  WebkitTextAlign: 'start',
                  textAlign: 'start'
                }}
                fontSize="7.095"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
                textAnchor="start"
                writingMode="lr-tb"
              ></path>
            </flowRegion>
            <flowPara>Elaine</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="7.095"
            transform="rotate(-18.607 242.357 -473.326) scale(.29834)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion
              fill="#000"
              fillOpacity="1"
              fontFamily="Futura LT Book"
              fontSize="7.095"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              <path
                fill="#000"
                fillOpacity="1"
                d="M190.187 85.619H390.12800000000004V138.286H190.187z"
                fontFamily="Futura LT Book"
                style={{
                  InkscapeFontSpecification: "'Futura LT Book, Bold'",
                  fontVariantLigatures: 'normal',
                  fontVariantCaps: 'normal',
                  fontVariantNumeric: 'normal',
                  fontFeatureSettings: 'normal',
                  WebkitTextAlign: 'start',
                  textAlign: 'start'
                }}
                fontSize="7.095"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
                textAnchor="start"
                writingMode="lr-tb"
              ></path>
            </flowRegion>
            <flowPara>toko trash</flowPara>
          </flowRoot>
          <text
            x="141.367"
            y="78.262"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-18.608 427.276 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="141.367"
              y="78.262"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              dizzy
            </tspan>
          </text>
          <flowRoot
            display="inline"
            fontSize="7.095"
            transform="rotate(-18.607 418.713 -239.198) scale(.29834)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion
              fill="#000"
              fillOpacity="1"
              fontFamily="Futura LT Book"
              fontSize="7.095"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              <path
                fill="#000"
                fillOpacity="1"
                d="M669.655 475.08H804.827V521.287H669.655z"
                fontFamily="Futura LT Book"
                style={{
                  InkscapeFontSpecification: "'Futura LT Book, Bold'",
                  fontVariantLigatures: 'normal',
                  fontVariantCaps: 'normal',
                  fontVariantNumeric: 'normal',
                  fontFeatureSettings: 'normal',
                  WebkitTextAlign: 'start',
                  textAlign: 'start'
                }}
                fontSize="7.095"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
                textAnchor="start"
                writingMode="lr-tb"
              ></path>
            </flowRegion>
            <flowPara>de Paperclip</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="7.095"
            transform="rotate(-18.607 236.708 -48.79) scale(.29834)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion
              fill="#000"
              fillOpacity="1"
              fontFamily="Futura LT Book"
              fontSize="7.095"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              <path
                fill="#000"
                fillOpacity="1"
                d="M376.552 313.701H548.966V368.184H376.552z"
                fontFamily="Futura LT Book"
                style={{
                  InkscapeFontSpecification: "'Futura LT Book, Bold'",
                  fontVariantLigatures: 'normal',
                  fontVariantCaps: 'normal',
                  fontVariantNumeric: 'normal',
                  fontFeatureSettings: 'normal',
                  WebkitTextAlign: 'start',
                  textAlign: 'start'
                }}
                fontSize="7.095"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
                textAnchor="start"
                writingMode="lr-tb"
              ></path>
            </flowRegion>
            <flowPara>belhuis Yaar</flowPara>
          </flowRoot>
          <text
            x="140.898"
            y="64.368"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-18.608 427.276 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="140.898"
              y="64.368"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              Shoarma
            </tspan>
            <tspan
              x="140.898"
              y="67.014"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              {' '}
              Madrid
            </tspan>
          </text>
          <text
            x="140.668"
            y="92.525"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-18.608 427.276 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="140.668"
              y="92.525"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              GEB toren
            </tspan>
          </text>
          <text
            x="105.69"
            y="38.847"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-18.608 427.276 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="105.69"
              y="38.847"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              Wow Pow studio
            </tspan>
          </text>
          <flowRoot
            display="inline"
            fontSize="7.095"
            transform="rotate(-18.607 239.652 -15.523) scale(.29834)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion
              fill="#000"
              fillOpacity="1"
              fontFamily="Futura LT Book"
              fontSize="7.095"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              <path
                fill="#000"
                fillOpacity="1"
                d="M119.31 363.356H235.172V384.046H119.31z"
                fontFamily="Futura LT Book"
                style={{
                  InkscapeFontSpecification: "'Futura LT Book, Bold'",
                  fontVariantLigatures: 'normal',
                  fontVariantCaps: 'normal',
                  fontVariantNumeric: 'normal',
                  fontFeatureSettings: 'normal',
                  WebkitTextAlign: 'start',
                  textAlign: 'start'
                }}
                fontSize="7.095"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
                textAnchor="start"
                writingMode="lr-tb"
              ></path>
            </flowRegion>
            <flowPara>valentijnschool</flowPara>
          </flowRoot>
          <flowRoot
            display="inline"
            fontSize="7.095"
            transform="rotate(-18.607 238.582 -10.27) scale(.29834)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion
              fill="#000"
              fillOpacity="1"
              fontFamily="Futura LT Book"
              fontSize="7.095"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              <path
                fill="#000"
                fillOpacity="1"
                d="M801.713 406.499H899.733V435.759H801.713z"
                fontFamily="Futura LT Book"
                style={{
                  InkscapeFontSpecification: "'Futura LT Book, Bold'",
                  fontVariantLigatures: 'normal',
                  fontVariantCaps: 'normal',
                  fontVariantNumeric: 'normal',
                  fontFeatureSettings: 'normal',
                  WebkitTextAlign: 'start',
                  textAlign: 'start'
                }}
                fontSize="7.095"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
                textAnchor="start"
                writingMode="lr-tb"
              ></path>
            </flowRegion>
            <flowPara>Elite</flowPara>
          </flowRoot>
          <text
            x="133.8"
            y="33.648"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-19.582 405.63 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="133.8"
              y="33.648"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              espresso dates
            </tspan>
          </text>
          <text
            x="103.474"
            y="117.341"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-18.608 427.276 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="103.474"
              y="117.341"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              Imperium
            </tspan>
          </text>
          <text
            x="102.77"
            y="30.741"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-18.608 427.276 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="102.77"
              y="30.741"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              avondwinkel
            </tspan>
          </text>
          <text
            x="261.726"
            y="80.359"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-18.608 427.276 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="261.726"
              y="80.359"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              waterfront
            </tspan>
          </text>
          <text
            x="225.947"
            y="16.065"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-18.608 427.276 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="225.947"
              y="16.065"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              hollywood
            </tspan>
          </text>
          <text
            x="234.41"
            y="11.737"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-18.608 427.276 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="234.41"
              y="11.737"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              schieblock &apos;07-&apos;10
            </tspan>
          </text>
          <text
            x="32.456"
            y="-0.276"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-18.608 427.276 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="32.456"
              y="-0.276"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              florida
            </tspan>
          </text>
          <text
            x="36.226"
            y="26.229"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-18.608 427.276 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="36.226"
              y="26.229"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              avondwinkel
            </tspan>
          </text>
          <flowRoot
            display="inline"
            fontSize="7.095"
            transform="rotate(-18.607 -5.466 -239.142) scale(.29834)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <flowRegion
              fill="#000"
              fillOpacity="1"
              fontFamily="Futura LT Book"
              fontSize="7.095"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              <path
                fill="#000"
                fillOpacity="1"
                d="M280 423.701H303.466V440.232H280z"
                fontFamily="Futura LT Book"
                style={{
                  InkscapeFontSpecification: "'Futura LT Book, Bold'",
                  fontVariantLigatures: 'normal',
                  fontVariantCaps: 'normal',
                  fontVariantNumeric: 'normal',
                  fontFeatureSettings: 'normal',
                  WebkitTextAlign: 'start',
                  textAlign: 'start'
                }}
                fontSize="7.095"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="bold"
                textAnchor="start"
                writingMode="lr-tb"
              ></path>
            </flowRegion>
            <flowPara>CS</flowPara>
          </flowRoot>
          <text
            x="399.901"
            y="137.818"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-19.582 405.63 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="399.901"
              y="137.818"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              Erasmus Universiteit
            </tspan>
          </text>
          <text
            x="256.318"
            y="162.08"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-19.582 405.63 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="256.318"
              y="162.08"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              Hogeschool Inholland
            </tspan>
          </text>
          <text
            x="313.068"
            y="83.571"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-19.582 405.63 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="313.068"
              y="83.571"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              Tropicana
            </tspan>
          </text>
          <text
            x="192.009"
            y="46.163"
            strokeWidth="0.166"
            display="inline"
            fontSize="2.117"
            transform="rotate(-18.608 427.276 70)"
            style={{
              lineHeight: '1.25',
              InkscapeFontSpecification: "'Futura LT Book, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              WebkitTextAlign: 'start',
              textAlign: 'start'
            }}
            xmlSpace="preserve"
          >
            <tspan
              x="192.009"
              y="46.163"
              fill="#000"
              fillOpacity="1"
              strokeWidth="0.166"
              style={{
                InkscapeFontSpecification: "'Futura LT Book, Bold'",
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontFeatureSettings: 'normal',
                WebkitTextAlign: 'start',
                textAlign: 'start'
              }}
              fontFamily="Futura LT Book"
              fontSize="2.117"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
              textAnchor="start"
              writingMode="lr-tb"
            >
              WATT
            </tspan>
          </text>
        </g>
        <g fillOpacity="1" display="inline">
          <path
            fill="#00000f"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.575"
            d="M174.363 139.375l4.306.086.062-3.103-1.985-2.13-2.322 2.044z"
            display="inline"
          ></path>
          <path
            fill="#00000f"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.979"
            d="M194.642 107.527l3.44.175.126-2.479-1.533-1.752-1.907 1.577z"
            display="inline"
          ></path>
          <path
            fill="#00000f"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.076"
            d="M171.51 113.583l3.785.04.03-2.728-1.763-1.856-2.024 1.816z"
            display="inline"
          ></path>
          <path
            fill="#00000f"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.096"
            d="M187.441 121.265l3.854.131.095-2.777-1.75-1.932-2.104 1.8z"
            display="inline"
          ></path>
          <path
            fill="#00000f"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.979"
            d="M190.999 152.148l3.444.034.025-2.482-1.605-1.687-1.84 1.653zM149.828 159.17l3.444-.055-.04-2.482-1.648-1.645-1.796 1.7zM158.492 185.686l3.442-.125-.09-2.48-1.681-1.612-1.761 1.737z"
            display="inline"
          ></path>
          <path
            fill="#00000f"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.079"
            d="M281.556 104.59l3.787.252.181-2.729-1.66-1.956-2.127 1.705zM348.601 277.543l3.795.071.051-2.734-1.751-1.875-2.043 1.804z"
            display="inline"
          ></path>
          <path
            fill="#00000f"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.979"
            d="M118.92 145.12l3.444-.08-.057-2.48-1.659-1.635-1.784 1.714zM223.868 12.796l3.444.062.045-2.481-1.59-1.7-1.854 1.637z"
            display="inline"
          ></path>
          <path
            fill="#00000f"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.079"
            d="M280.164 340.084l3.796-.037-.027-2.735-1.804-1.824-1.992 1.861z"
            display="inline"
          ></path>
          <path
            fill="#00000f"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.979"
            d="M338.107 196.505l3.44-.182-.132-2.479-1.707-1.583-1.732 1.766zM232.73 167.488l3.443-.125-.09-2.48-1.681-1.611-1.762 1.736zM196.725 85.993l3.442-.126-.09-2.48-1.68-1.611-1.762 1.736z"
            display="inline"
          ></path>
          <path
            fill="#000"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.361"
            d="M214.305 86.793l2.73.054.04-1.935-1.259-1.328-1.472 1.275z"
            display="inline"
          ></path>
          <path
            className="osso1"
            fill="#ff00e1"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.081"
            d="M51.836 96.704h4.772v-3.438l-2.246-2.316-2.526 2.316z"
            display="inline"
            transform="matrix(.89908 -.00975 .00975 .89908 89.115 126.771)"
          ></path>
          <path
            className="osso1"
            fill="#ff00e1"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.081"
            d="M51.836 96.704h4.772v-3.438l-2.246-2.316-2.526 2.316z"
            display="inline"
            transform="matrix(.89908 -.00975 .00975 .89908 55.37 54.443)"
          ></path>
          <path
            className="osso1"
            fill="#ff00e1"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.081"
            d="M51.836 96.704h4.772v-3.438l-2.246-2.316-2.526 2.316z"
            display="inline"
            transform="matrix(.89908 -.00975 .00975 .89908 95.269 43.533)"
          ></path>
          <path
            className="osso1"
            fill="#ff00e1"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.081"
            d="M51.836 96.704h4.772v-3.438l-2.246-2.316-2.526 2.316z"
            display="inline"
            transform="matrix(.89908 -.00975 .00975 .89908 230.91 50.907)"
          ></path>
          <path
            className="osso1"
            fill="#ff00e1"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.081"
            d="M51.836 96.704h4.772v-3.438l-2.246-2.316-2.526 2.316z"
            display="inline"
            transform="matrix(.89908 -.00975 .00975 .89908 237.082 34.376)"
          ></path>
          <path
            className="osso1"
            fill="#ff00e1"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1"
            d="M51.836 96.704h4.772v-3.438l-2.246-2.316-2.526 2.316z"
            display="inline"
            transform="matrix(.89908 -.00975 .00975 .89908 280.504 31.51)"
            onClick={this.handleClick}
          ></path>
          <path
            className="osso1"
            fill="#ff00e1"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.081"
            d="M51.836 96.704h4.772v-3.438l-2.246-2.316-2.526 2.316z"
            display="inline"
            transform="rotate(-.632 2840.333 -17357.814) scale(.59412)"
          ></path>
          <path
            className="osso1"
            fill="#ff00e1"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.081"
            d="M51.836 96.704h4.772v-3.438l-2.246-2.316-2.526 2.316z"
            display="inline"
            transform="matrix(.89908 -.00975 .00975 .89908 147.593 32.833)"
          ></path>
          <path
            className="osso1"
            fill="#ff00e1"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.081"
            d="M51.836 96.704h4.772v-3.438l-2.246-2.316-2.526 2.316z"
            display="inline"
            transform="matrix(.89908 -.00975 .00975 .89908 -10.09 71.431)"
          ></path>
          <path
            fill="#00000f"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.565"
            d="M207.573 88.92l26.807.312"
            display="inline"
          ></path>
          <path
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.081"
            d="M51.836 96.704h4.772v-3.438l-2.246-2.316-2.526 2.316z"
            display="inline"
            transform="matrix(.8982 -.04088 .04088 .8982 36.297 90.03)"
          ></path>
          <path
            fill="#000"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.572"
            d="M103.21 191.839l4.271-.396-.285-3.078-2.202-1.887-2.07 2.282z"
            display="inline"
          ></path>
          <path
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.081"
            d="M54.333 91.65L51.67 95.61l2.852 1.92 3.175-.57-.51-3.389z"
            display="inline"
            transform="matrix(-.51822 -.73478 .73478 -.51822 -4.622 221.29)"
          ></path>
          <path
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.081"
            d="M51.836 96.704h4.772v-3.438l-2.246-2.316-2.526 2.316z"
            display="inline"
            transform="matrix(.89908 -.00975 .00975 .89908 5.752 48.705)"
          ></path>
          <path
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.081"
            d="M51.836 96.704h4.772v-3.438l-2.246-2.316-2.526 2.316z"
            display="inline"
            transform="matrix(.89874 .02674 -.02674 .89874 264.314 122.048)"
          ></path>
          <path
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.081"
            d="M51.836 96.704h4.772v-3.438l-2.246-2.316-2.526 2.316z"
            display="inline"
            transform="matrix(.89908 -.00975 .00975 .89908 380.487 56.47)"
          ></path>
          <path
            className="osso1"
            fill="#ff00e1"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.081"
            d="M51.836 96.704h4.772v-3.438l-2.246-2.316-2.526 2.316z"
            display="inline"
            transform="rotate(-.632 2065.874 -18469.655) scale(.59412)"
          ></path>
          <path
            className="osso1"
            fill="#ff00e1"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.081"
            d="M51.836 96.704h4.772v-3.438l-2.246-2.316-2.526 2.316z"
            display="inline"
            transform="rotate(-.632 466.077 -17615.097) scale(.59412)"
          ></path>
          <path
            fill="#00000f"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.401"
            d="M227.599 67.98l3.002.06.043-2.164-1.384-1.485-1.618 1.426z"
            display="inline"
          ></path>
          <path
            fill="#00000f"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.076"
            d="M178.575 124.155l3.786.04.029-2.728-1.762-1.856-2.024 1.816z"
            display="inline"
          ></path>
          <path
            fill="#00000f"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.575"
            d="M177.344 145.671l4.306.086.062-3.103-1.985-2.13-2.321 2.044zM183.406 142.806l4.306.086.062-3.103-1.985-2.13-2.322 2.044z"
            display="inline"
          ></path>
          <path
            fill="#00000f"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.575"
            d="M166.599 28.374l4.306.086.062-3.103-1.985-2.13-2.321 2.044z"
            display="inline"
            transform="translate(0 140)"
          ></path>
          <path
            fill="#00000f"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.079"
            d="M180.479 112.365l3.795.033.024-2.735-1.77-1.857-2.026 1.824z"
            display="inline"
          ></path>
        </g>
      </svg>
    );
  }
}

export default cultureMap;
