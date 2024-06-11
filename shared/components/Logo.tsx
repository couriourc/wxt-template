import {memo} from "react";
import {useWindowSize} from "react-use";
import Title from "@/assets/title.header-bg.svg";

export const Logo = memo(() => {
    return <svg width="29" height="29" viewBox="0 0 29 29" fill="inherit" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.2916 4.83332C14.0758 4.83332 14.802 5.08224 15.3953 5.50515C13.8342 6.31836 12.3987 7.34182 10.875 8.22149L12.0833 10.3143C13.9864 9.21474 15.7711 7.83724 17.835 7.04457C18.4114 6.82466 19.0344 6.75546 19.6451 6.84353C20.2557 6.9316 20.8338 7.17401 21.3246 7.54784C21.8155 7.92168 22.2028 8.41456 22.45 8.97985C22.6971 9.54515 22.796 10.1642 22.7372 10.7783C21.2521 9.83219 19.6475 9.09994 18.125 8.22149L16.9166 10.3143C18.8198 11.4139 20.9065 12.2694 22.6236 13.6614C23.1021 14.0507 23.4734 14.5557 23.7023 15.1285C23.9313 15.7014 24.0103 16.3232 23.9319 16.935C23.8535 17.5469 23.6203 18.1287 23.2543 18.6253C22.8884 19.122 22.4018 19.517 21.8406 19.7732C21.9191 18.0138 21.75 16.2581 21.75 14.5H19.3333C19.3333 16.6967 19.6354 18.9334 19.2886 21.1168C19.1906 21.7259 18.9388 22.3 18.5571 22.7847C18.1754 23.2693 17.6763 23.6486 17.1071 23.8865C16.5379 24.1245 15.9174 24.2133 15.3043 24.1446C14.6912 24.0758 14.1057 23.8518 13.6034 23.4936C15.1658 22.6804 16.6025 21.6569 18.125 20.7785L16.9166 18.6857C15.0135 19.7852 13.2288 21.1627 11.165 21.9554C10.5885 22.1753 9.96549 22.2445 9.35483 22.1564C8.74418 22.0684 8.1661 21.826 7.67528 21.4521C7.18446 21.0783 6.79714 20.5854 6.54996 20.0201C6.30279 19.4548 6.20393 18.8358 6.26275 18.2217C7.749 19.1666 9.35246 19.8988 10.875 20.7785L12.0833 18.6857C10.1802 17.5861 8.09338 16.7306 6.37513 15.3386C5.89665 14.9492 5.52542 14.4441 5.29658 13.8712C5.06774 13.2983 4.98884 12.6765 5.06736 12.0646C5.14587 11.4527 5.3792 10.8709 5.74527 10.3744C6.11134 9.87779 6.59804 9.48282 7.15934 9.22682C7.08079 10.9862 7.24996 12.7419 7.24996 14.5H9.66663C9.66663 12.3032 9.36454 10.0666 9.71134 7.88315C9.84833 7.03225 10.2839 6.25796 10.94 5.69908C11.5961 5.1402 12.4298 4.83328 13.2916 4.83332ZM17.8748 4.52157C17.1761 3.70835 16.2735 3.0957 15.2597 2.74649C14.246 2.39727 13.1576 2.32407 12.1062 2.5344C11.0548 2.74472 10.0784 3.23099 9.27698 3.94332C8.47559 4.65564 7.87817 5.56836 7.546 6.58782C6.4923 6.78636 5.51041 7.2617 4.70108 7.96504C3.89176 8.66839 3.28415 9.57441 2.94061 10.5901C2.59708 11.6058 2.52999 12.6947 2.74624 13.7449C2.96248 14.7951 3.45427 15.7689 4.17113 16.5662C3.81609 17.5781 3.73673 18.6663 3.94119 19.719C4.14566 20.7717 4.62658 21.7511 5.3346 22.5565C6.04262 23.362 6.95222 23.9645 7.97004 24.3022C8.98785 24.64 10.0772 24.7008 11.1263 24.4784C11.8251 25.2916 12.7277 25.9043 13.7414 26.2535C14.7551 26.6027 15.8435 26.6759 16.8949 26.4656C17.9463 26.2553 18.9228 25.769 19.7242 25.0567C20.5255 24.3443 21.123 23.4316 21.4551 22.4122C22.5088 22.2136 23.4907 21.7383 24.3 21.0349C25.1094 20.3316 25.717 19.4256 26.0605 18.4098C26.4041 17.3941 26.4711 16.3053 26.2549 15.2551C26.0387 14.2049 25.5469 13.2311 24.83 12.4337C25.185 11.4218 25.2644 10.3337 25.0599 9.28094C24.8555 8.22822 24.3745 7.24888 23.6665 6.44344C22.9585 5.638 22.0489 5.03549 21.0311 4.69774C20.0133 4.36 18.9239 4.29919 17.8748 4.52157Z"
            fill="url(#paint0_radial_2316_12)"/>
        <path
            d="M10.9886 12.9858L11.2784 11.2727H18.6548L18.3651 12.9858H15.7188L14.5597 20H12.4801L13.6392 12.9858H10.9886Z"
            fill="#2EB0CC"/>
        <defs>
            <radialGradient id="paint0_radial_2316_12" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(14.5006 14.5) rotate(90) scale(12.083 11.8785)">
                <stop offset="0.0001" stopColor="#17F4E7"/>
                <stop offset="1" stopColor="#5F9BE1"/>
            </radialGradient>
        </defs>
    </svg>;
});

export const LogoWithName = memo(() => {
    return <svg width="112" height="29" viewBox="0 0 112 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M30.3182 12.6477L30.7045 10.3636H40.5398L40.1534 12.6477H36.625L35.0795 22H32.3068L33.8523 12.6477H30.3182ZM39.0753 22L40.5298 13.2727H43.2287L42.9616 14.8636H43.0526C43.3063 14.2879 43.6378 13.8598 44.0469 13.5795C44.456 13.2955 44.8991 13.1534 45.3764 13.1534C45.5052 13.1534 45.634 13.1629 45.7628 13.1818C45.8954 13.197 46.0204 13.2197 46.1378 13.25L45.7287 15.6705C45.5999 15.6212 45.4313 15.5852 45.223 15.5625C45.0147 15.536 44.8253 15.5227 44.6548 15.5227C44.3253 15.5227 44.0185 15.5966 43.7344 15.7443C43.4541 15.8883 43.2154 16.0909 43.0185 16.3523C42.8253 16.6098 42.6984 16.9129 42.6378 17.2614L41.8537 22H39.0753ZM47.919 22.1477C47.366 22.1477 46.8887 22.0549 46.4872 21.8693C46.0895 21.6799 45.7978 21.3939 45.6122 21.0114C45.4304 20.6288 45.3868 20.1515 45.4815 19.5795C45.5649 19.0947 45.7183 18.6875 45.9418 18.358C46.169 18.0246 46.4474 17.7538 46.777 17.5455C47.1103 17.3371 47.4815 17.178 47.8906 17.0682C48.2997 16.9583 48.7277 16.8845 49.1747 16.8466C49.6747 16.8011 50.08 16.7519 50.3906 16.6989C50.705 16.6458 50.9399 16.572 51.0952 16.4773C51.2505 16.3788 51.3452 16.2424 51.3793 16.0682V16.0398C51.4247 15.7481 51.3622 15.5227 51.1918 15.3636C51.0213 15.2045 50.7656 15.125 50.4247 15.125C50.0611 15.125 49.7505 15.2045 49.4929 15.3636C49.2353 15.5227 49.0554 15.7424 48.9531 16.0227L46.4077 15.9318C46.5668 15.4015 46.8395 14.928 47.2259 14.5114C47.6122 14.0909 48.1027 13.7614 48.6974 13.5227C49.2959 13.2803 49.9872 13.1591 50.7713 13.1591C51.3243 13.1591 51.8243 13.2254 52.2713 13.358C52.7183 13.4867 53.0952 13.6761 53.402 13.9261C53.7126 14.1723 53.9342 14.4754 54.0668 14.8352C54.1993 15.1951 54.2277 15.6061 54.152 16.0682L53.1577 22H50.544L50.7486 20.7841H50.6804C50.4759 21.0795 50.2353 21.3295 49.9588 21.5341C49.6861 21.7386 49.3793 21.892 49.0384 21.9943C48.6974 22.0966 48.3243 22.1477 47.919 22.1477ZM49.0895 20.3295C49.3812 20.3295 49.6577 20.2689 49.919 20.1477C50.1804 20.0265 50.4001 19.8598 50.5781 19.6477C50.7599 19.4318 50.8755 19.1818 50.9247 18.8977L51.0554 18.0682C50.9759 18.1098 50.8755 18.1477 50.7543 18.1818C50.633 18.2159 50.5043 18.2481 50.3679 18.2784C50.2315 18.3049 50.0914 18.3314 49.9474 18.358C49.8073 18.3807 49.6728 18.4015 49.544 18.4205C49.2713 18.4621 49.0346 18.5265 48.8338 18.6136C48.633 18.7008 48.4721 18.8144 48.3509 18.9545C48.2334 19.0909 48.1615 19.2538 48.1349 19.4432C48.0895 19.7273 48.1558 19.947 48.3338 20.1023C48.5118 20.2538 48.7637 20.3295 49.0895 20.3295ZM58.4815 17.0227L57.652 22H54.8736L56.3281 13.2727H58.9702L58.7088 14.875H58.8054C59.0781 14.3409 59.474 13.9223 59.9929 13.6193C60.5118 13.3125 61.0952 13.1591 61.7429 13.1591C62.3527 13.1591 62.8622 13.2955 63.2713 13.5682C63.6804 13.8409 63.9702 14.2235 64.1406 14.7159C64.3111 15.2045 64.3395 15.7784 64.2259 16.4375L63.294 22H60.5156L61.3509 16.983C61.4342 16.5019 61.3755 16.125 61.1747 15.8523C60.9777 15.5758 60.6558 15.4375 60.2088 15.4375C59.9171 15.4375 59.6501 15.5019 59.4077 15.6307C59.169 15.7557 58.9683 15.9356 58.8054 16.1705C58.6463 16.4053 58.5384 16.6894 58.4815 17.0227ZM73.6051 15.9375L71.0994 16.0057C71.1032 15.8201 71.0616 15.6572 70.9744 15.517C70.8873 15.3731 70.7642 15.2614 70.6051 15.1818C70.446 15.1023 70.2566 15.0625 70.0369 15.0625C69.6809 15.0625 69.3608 15.142 69.0767 15.3011C68.7964 15.4602 68.6392 15.6667 68.6051 15.9205C68.5786 16.0568 68.6165 16.1761 68.7188 16.2784C68.821 16.3769 69.0483 16.464 69.4006 16.5398L71.0369 16.858C71.8778 17.0246 72.4877 17.3144 72.8665 17.7273C73.2491 18.1364 73.3854 18.678 73.2756 19.3523C73.1771 19.928 72.9233 20.4261 72.5142 20.8466C72.1089 21.267 71.5919 21.5928 70.9631 21.8239C70.3381 22.0511 69.6468 22.1648 68.8892 22.1648C67.6089 22.1648 66.643 21.9072 65.9915 21.392C65.3438 20.8731 65.0407 20.1856 65.0824 19.3295L67.7869 19.2614C67.7983 19.5833 67.9062 19.8258 68.1108 19.9886C68.3191 20.1477 68.6013 20.2311 68.9574 20.2386C69.3475 20.2462 69.6847 20.1648 69.9688 19.9943C70.2528 19.8239 70.4119 19.6136 70.446 19.3636C70.4688 19.2008 70.4138 19.0739 70.2812 18.983C70.1525 18.892 69.9119 18.8106 69.5597 18.7386L68.0824 18.4489C67.2339 18.286 66.6203 17.9792 66.2415 17.5284C65.8665 17.0739 65.7377 16.4943 65.8551 15.7898C65.9536 15.2292 66.1847 14.7538 66.5483 14.3636C66.9157 13.9697 67.3949 13.6705 67.9858 13.4659C68.5805 13.2614 69.2585 13.1591 70.0199 13.1591C71.2396 13.1591 72.16 13.4072 72.7812 13.9034C73.4062 14.3958 73.6809 15.0739 73.6051 15.9375ZM78.9105 10.3636L76.9787 22H74.2003L76.1321 10.3636H78.9105ZM81.1847 22.1477C80.6316 22.1477 80.1544 22.0549 79.7528 21.8693C79.3551 21.6799 79.0634 21.3939 78.8778 21.0114C78.696 20.6288 78.6525 20.1515 78.7472 19.5795C78.8305 19.0947 78.9839 18.6875 79.2074 18.358C79.4347 18.0246 79.7131 17.7538 80.0426 17.5455C80.3759 17.3371 80.7472 17.178 81.1562 17.0682C81.5653 16.9583 81.9934 16.8845 82.4403 16.8466C82.9403 16.8011 83.3456 16.7519 83.6562 16.6989C83.9706 16.6458 84.2055 16.572 84.3608 16.4773C84.5161 16.3788 84.6108 16.2424 84.6449 16.0682V16.0398C84.6903 15.7481 84.6278 15.5227 84.4574 15.3636C84.2869 15.2045 84.0312 15.125 83.6903 15.125C83.3267 15.125 83.0161 15.2045 82.7585 15.3636C82.5009 15.5227 82.321 15.7424 82.2188 16.0227L79.6733 15.9318C79.8324 15.4015 80.1051 14.928 80.4915 14.5114C80.8778 14.0909 81.3684 13.7614 81.9631 13.5227C82.5616 13.2803 83.2528 13.1591 84.0369 13.1591C84.59 13.1591 85.09 13.2254 85.5369 13.358C85.9839 13.4867 86.3608 13.6761 86.6676 13.9261C86.9782 14.1723 87.1998 14.4754 87.3324 14.8352C87.465 15.1951 87.4934 15.6061 87.4176 16.0682L86.4233 22H83.8097L84.0142 20.7841H83.946C83.7415 21.0795 83.5009 21.3295 83.2244 21.5341C82.9517 21.7386 82.6449 21.892 82.304 21.9943C81.9631 22.0966 81.59 22.1477 81.1847 22.1477ZM82.3551 20.3295C82.6468 20.3295 82.9233 20.2689 83.1847 20.1477C83.446 20.0265 83.6657 19.8598 83.8438 19.6477C84.0256 19.4318 84.1411 19.1818 84.1903 18.8977L84.321 18.0682C84.2415 18.1098 84.1411 18.1477 84.0199 18.1818C83.8987 18.2159 83.7699 18.2481 83.6335 18.2784C83.4972 18.3049 83.357 18.3314 83.2131 18.358C83.0729 18.3807 82.9384 18.4015 82.8097 18.4205C82.5369 18.4621 82.3002 18.5265 82.0994 18.6136C81.8987 18.7008 81.7377 18.8144 81.6165 18.9545C81.4991 19.0909 81.4271 19.2538 81.4006 19.4432C81.3551 19.7273 81.4214 19.947 81.5994 20.1023C81.7775 20.2538 82.0294 20.3295 82.3551 20.3295ZM94.5028 13.2727L94.1562 15.3182H88.6506L88.9972 13.2727H94.5028ZM90.4915 11.1818H93.2699L91.929 19.2557C91.9025 19.4261 91.9063 19.5644 91.9403 19.6705C91.9782 19.7727 92.0464 19.8466 92.1449 19.892C92.2472 19.9337 92.3722 19.9545 92.5199 19.9545C92.6222 19.9545 92.7358 19.9432 92.8608 19.9205C92.9858 19.8977 93.0805 19.8807 93.1449 19.8693L93.2358 21.875C93.0881 21.9167 92.8892 21.964 92.6392 22.017C92.393 22.0739 92.1051 22.1098 91.7756 22.125C91.1089 22.1515 90.5578 22.0739 90.1222 21.892C89.6903 21.7064 89.3854 21.4186 89.2074 21.0284C89.0331 20.6383 88.9991 20.1496 89.1051 19.5625L90.4915 11.1818ZM98.4403 22.1648C97.5199 22.1648 96.7604 21.9754 96.1619 21.5966C95.5672 21.2178 95.1487 20.6894 94.9062 20.0114C94.6638 19.3333 94.6165 18.5455 94.7642 17.6477C94.9119 16.7538 95.2169 15.9697 95.679 15.2955C96.1411 14.6212 96.732 14.0966 97.4517 13.7216C98.1714 13.3466 98.9877 13.1591 99.9006 13.1591C100.817 13.1591 101.573 13.3485 102.168 13.7273C102.766 14.1061 103.187 14.6345 103.429 15.3125C103.675 15.9905 103.724 16.7803 103.577 17.6818C103.429 18.5758 103.122 19.3598 102.656 20.0341C102.19 20.7045 101.599 21.2273 100.884 21.6023C100.168 21.9773 99.3532 22.1648 98.4403 22.1648ZM98.7528 20.0682C99.0938 20.0682 99.3987 19.9659 99.6676 19.7614C99.9403 19.5568 100.17 19.2708 100.355 18.9034C100.541 18.536 100.673 18.1098 100.753 17.625C100.832 17.1477 100.84 16.7292 100.776 16.3693C100.715 16.0057 100.586 15.7235 100.389 15.5227C100.192 15.3182 99.9252 15.2159 99.5881 15.2159C99.2472 15.2159 98.9403 15.3201 98.6676 15.5284C98.3949 15.733 98.1657 16.0189 97.9801 16.3864C97.7983 16.75 97.6676 17.1761 97.5881 17.6648C97.5085 18.142 97.4991 18.5606 97.5597 18.9205C97.6203 19.2803 97.7509 19.5625 97.9517 19.767C98.1525 19.9678 98.4195 20.0682 98.7528 20.0682ZM104.278 22L105.733 13.2727H108.432L108.165 14.8636H108.256C108.509 14.2879 108.841 13.8598 109.25 13.5795C109.659 13.2955 110.102 13.1534 110.58 13.1534C110.708 13.1534 110.837 13.1629 110.966 13.1818C111.098 13.197 111.223 13.2197 111.341 13.25L110.932 15.6705C110.803 15.6212 110.634 15.5852 110.426 15.5625C110.218 15.536 110.028 15.5227 109.858 15.5227C109.528 15.5227 109.222 15.5966 108.938 15.7443C108.657 15.8883 108.419 16.0909 108.222 16.3523C108.028 16.6098 107.902 16.9129 107.841 17.2614L107.057 22H104.278Z"
            fill="url(#paint0_linear_2317_19)"/>
        <path
            d="M13.2916 4.83332C14.0758 4.83332 14.802 5.08224 15.3953 5.50515C13.8342 6.31836 12.3987 7.34182 10.875 8.22149L12.0833 10.3143C13.9864 9.21474 15.7711 7.83724 17.835 7.04457C18.4114 6.82466 19.0344 6.75546 19.6451 6.84353C20.2557 6.9316 20.8338 7.17401 21.3246 7.54785C21.8155 7.92168 22.2028 8.41456 22.45 8.97985C22.6971 9.54515 22.796 10.1642 22.7372 10.7783C21.2521 9.83219 19.6475 9.09994 18.125 8.22149L16.9166 10.3143C18.8198 11.4139 20.9065 12.2694 22.6236 13.6614C23.1021 14.0507 23.4734 14.5557 23.7023 15.1285C23.9313 15.7014 24.0103 16.3232 23.9319 16.935C23.8535 17.5469 23.6203 18.1287 23.2543 18.6253C22.8884 19.122 22.4018 19.517 21.8406 19.7732C21.9191 18.0138 21.75 16.2581 21.75 14.5H19.3333C19.3333 16.6967 19.6354 18.9334 19.2886 21.1168C19.1906 21.7259 18.9388 22.3 18.5571 22.7847C18.1754 23.2693 17.6763 23.6486 17.1071 23.8865C16.5379 24.1245 15.9174 24.2133 15.3043 24.1446C14.6912 24.0758 14.1057 23.8518 13.6034 23.4936C15.1658 22.6804 16.6025 21.6569 18.125 20.7785L16.9166 18.6857C15.0135 19.7852 13.2288 21.1627 11.165 21.9554C10.5885 22.1753 9.96549 22.2445 9.35483 22.1564C8.74418 22.0684 8.1661 21.826 7.67528 21.4521C7.18446 21.0783 6.79714 20.5854 6.54996 20.0201C6.30279 19.4548 6.20393 18.8358 6.26275 18.2217C7.749 19.1666 9.35246 19.8988 10.875 20.7785L12.0833 18.6857C10.1802 17.5861 8.09338 16.7306 6.37513 15.3386C5.89665 14.9492 5.52542 14.4441 5.29658 13.8712C5.06774 13.2983 4.98884 12.6765 5.06736 12.0646C5.14587 11.4527 5.3792 10.8709 5.74527 10.3744C6.11134 9.87779 6.59804 9.48282 7.15934 9.22682C7.08079 10.9862 7.24996 12.7419 7.24996 14.5H9.66663C9.66663 12.3032 9.36454 10.0666 9.71134 7.88315C9.84833 7.03225 10.2839 6.25796 10.94 5.69908C11.5961 5.1402 12.4298 4.83328 13.2916 4.83332ZM17.8748 4.52157C17.1761 3.70835 16.2735 3.0957 15.2597 2.74649C14.246 2.39727 13.1576 2.32407 12.1062 2.5344C11.0548 2.74472 10.0784 3.23099 9.27698 3.94332C8.47559 4.65564 7.87817 5.56836 7.546 6.58782C6.4923 6.78636 5.51041 7.2617 4.70108 7.96504C3.89176 8.66839 3.28415 9.57441 2.94061 10.5901C2.59708 11.6058 2.52999 12.6947 2.74624 13.7449C2.96248 14.7951 3.45427 15.7689 4.17113 16.5662C3.81609 17.5781 3.73673 18.6663 3.94119 19.719C4.14566 20.7718 4.62658 21.7511 5.3346 22.5565C6.04262 23.362 6.95222 23.9645 7.97004 24.3022C8.98785 24.64 10.0772 24.7008 11.1263 24.4784C11.8251 25.2916 12.7277 25.9043 13.7414 26.2535C14.7551 26.6027 15.8435 26.6759 16.8949 26.4656C17.9463 26.2553 18.9228 25.769 19.7242 25.0567C20.5255 24.3443 21.123 23.4316 21.4551 22.4122C22.5088 22.2136 23.4907 21.7383 24.3 21.0349C25.1094 20.3316 25.717 19.4256 26.0605 18.4098C26.4041 17.3941 26.4711 16.3053 26.2549 15.2551C26.0387 14.2049 25.5469 13.2311 24.83 12.4337C25.185 11.4218 25.2644 10.3337 25.0599 9.28094C24.8555 8.22822 24.3745 7.24888 23.6665 6.44344C22.9585 5.638 22.0489 5.03549 21.0311 4.69774C20.0133 4.36 18.9239 4.29919 17.8748 4.52157Z"
            fill="url(#paint1_radial_2317_19)"/>
        <path
            d="M10.9886 12.9858L11.2784 11.2727H18.6548L18.3651 12.9858H15.7188L14.5597 20H12.4801L13.6392 12.9858H10.9886Z"
            fill="#2EB0CC"/>
        <defs>
            <linearGradient id="paint0_linear_2317_19" x1="29" y1="16.5" x2="111" y2="16.5"
                            gradientUnits="userSpaceOnUse">
                <stop offset="0.42" stopColor="#5F9BE1"/>
                <stop offset="1" stopColor="#17F4E7"/>
            </linearGradient>
            <radialGradient id="paint1_radial_2317_19" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(14.5006 14.5) rotate(90) scale(12.083 11.8785)">
                <stop offset="0.0001" stopColor="#17F4E7"/>
                <stop offset="1" stopColor="#5F9BE1"/>
            </radialGradient>
        </defs>
    </svg>;

});

export const TitleBarHeader = memo(() => {
        return <img src={Title} alt={"bg"} className={"min-w-300px w-100vw"} />;
    }
);
