export interface BrandProps {
  name: string;
  type: string;
}

export interface MessagesProps {
  id: string;
  isRead: boolean;
  isSenderMessage: boolean;
  createdAt: string;
  text: string;
}

export interface ChatProps {
  id: string;
  sender: string;
  avatar: string;
  brand: BrandProps;
  createAt: string;
  messages: MessagesProps[];
}

const contactChatList: ChatProps[] = [
  {
    id: "chat-1",
    sender: "Alice",
    avatar:
      "https://s3-alpha-sig.figma.com/img/0f39/49ff/dbf00f92bb55391cfe360e2cc0cf8422?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ftdHloQVZFVO0-RkiBG4CDVuwpwjoIRlbRCrcWAZLs68kYZanqDiGOtfVnokfuMbNXhL6Zo4TBJbEQA-bpQ2kVTN~8wiE8QRsa4z52MxdEm-y3LjEyGyR2rWRLovEhy-qKCOw4zksb936yaT7FJR-3vHwDa6RNoc8dr6aIvMMgm~xOZO1l1toCemBsq9befhFVCrqi1Eb3hY~yVUOlntr6aVDIlC2g-ycvKCWeFR97obG2YdfGGO9gkPBk9ERswM-qqbkjTBvUk38cVeDjURLq2qM8Hju736jioijCMfvZHbM51aml4H2GqOCaOcfDnALHp1yelh4RRQ4MgwPRtJsQ__",
    brand: { name: "Tokopedia", type: "Beauty Lovers" },
    createAt: "Today",
    messages: [
      {
        id: "msg-1",
        isRead: true,
        isSenderMessage: false,
        createdAt: "Today",
        text: "Lorem ipsum dolor ?",
      },
      {
        id: "msg-2",
        isRead: false,
        isSenderMessage: true,
        createdAt: "Today",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, repellendus.",
      },
    ],
  },
  {
    id: "chat-2",
    sender: "Kevin",
    avatar:
      "https://s3-alpha-sig.figma.com/img/56db/e5f1/dcd291a77cdc2e04f995644770760714?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eW~A41qWjoS6UbCSND1ms6eZXcvz1h2CWaHE1XYRsPxGkyqYuq1Cbutwmv1SIiZBwAWkyyv0MdVpNm2BwEqYtP9xTbg68y1WFK7nW0vFgqXqJEpXsTGrfHgVD5IX85Iy71AXclnOM0kqE11Ro99VREfYs4kqZ4f-bjZ6AhGoMpx7k8BY0F5liQ3dBkpmKZzSNQMWk332vDVxYNZhR2Ju5jR2zlbxQf3H-BcqLffHdEs4WFmxbwhfiU7pmFv7P7~b~87V~HyW952Kvg8nfuJZC6uQj7CDBAEDMkx95HpGWTB77LDY0sSe-JUjz6dGO95JvjK~fwdD1L2os93XYO1kiQ__",
    brand: { name: "Tokopedia", type: "Beauty Lovers" },
    createAt: "Today",
    messages: [
      {
        id: "msg-3",
        isRead: true,
        isSenderMessage: true,
        createdAt: "Today",
        text: "Hi Radya",
      },
      {
        id: "msg-4",
        isRead: true,
        isSenderMessage: false,
        createdAt: "Today",
        text: "Hi Whatsup",
      },
    ],
  },
  {
    id: "chat-3",
    sender: "Alya",
    avatar:
      "https://s3-alpha-sig.figma.com/img/738e/6e77/a92971e6075b85d18be0de93205d90cb?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jlc01GXwUQZ~SVd~rQZwMiVzNLMaVUnkXCXi7D~p6QH9l3a~emp1dl6bsvxEOnP2cVXKm0FfmPD0Jp72aTNzG25QpEcC9NXOIK0VcCzteH8bEVExFfnYYIvGgQJPNURvRM5I-gyI7ARLg-sss4AH374XXEYPgBN1SRrt~6j3rVlbR6bHRVRvsd6g3d2rPu7d5IKng3nSHhCk2SCdD3PuX7mA-WihEHUTzD7szPmg54Qs2hfIsxPhGpxIsvyJAtqlRwvK2OtgOjJ45zwBJd~P202jUuWrOeFJfKnieT4SPxxtDcMdw4qWuSJwB6c01sz35d~l8iM4T0TRLi-POeAOPw__",
    brand: { name: "Tokopedia", type: "Beauty Lovers" },
    createAt: "Yesterday",
    messages: [
      {
        id: "msg-5",
        isRead: true,
        isSenderMessage: true,
        createdAt: "Yesterday",
        text: "Lorem ipsum",
      },
      {
        id: "msg-6",
        isRead: false,
        isSenderMessage: false,
        createdAt: "Yesterday",
        text: "Lorem Ipsum ???",
      },
    ],
  },
  {
    id: "chat-4",
    sender: "Anna",
    avatar:
      "https://s3-alpha-sig.figma.com/img/c224/59c1/d29eaf3771b278cd40a4a1399c3436ca?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GvglLsPvxXWweIpA5j1eJvOgkDqKFjIVNAT0OOK-dOyiHo2VpuT9AGy1qH-ELeql6jqp1WXuoNAoY-er4T0oRfEC9WM7PiL~E8hY55LEpwOtXNzRzDnsAjmN2cRqO7quOO0N8arTB39u4D3YPRtPXi2X54kZs4V1qyCTfoiAhXa7HZcFRRuVVR76~lmez2wl1A9auUC5405iuVfTZkJRKOQF5t7nprlyTC5XX4bLfCBecawcbxWVpzZKQFJw8Pu3HdwO~wG1MXCe2EjOXyzAQDNJgD6dAyNBiL7ORpMsHxPaLXfOkCHkRuxN2NEA-6mcAExquY0lKxg71486kPItGA__",
    brand: { name: "Tokopedia", type: "Beauty Lovers" },
    createAt: "Yesterday",
    messages: [
      {
        id: "msg-7",
        isRead: true,
        isSenderMessage: false,
        createdAt: "Yesterday",
        text: "Come Here",
      },
      {
        id: "msg-8",
        isRead: false,
        isSenderMessage: true,
        createdAt: "Yesterday",
        text: "Where?",
      },
    ],
  },
];

export { contactChatList };
