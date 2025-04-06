"use client"

export function AsciiArt() {
  return (
    <pre className="overflow-hidden">
      {`
                   _____
                  /     \\
                 | () () |
                  \\  ^  /
                   |||||
                   |||||
    ______     ____|||||____     ______
   /      \\   /            \\   /      \\
  /   __   \\ /   LOOKAWAY   \\ /   __   \\
  |  /  \\  | |     APP     | |  /  \\  |
  |  \\__/  | |              | |  \\__/  |
   \\      /   \\            /   \\      /
    \\____/     \\__________/     \\____/
  
    +---------------------------------+
    |                                 |
    |  PROTECT YOUR EYES WHILE YOU    |
    |  WORK ON YOUR COMPUTER          |
    |                                 |
    |  * FOLLOW THE 20-20-20 RULE     |
    |  * REDUCE EYE STRAIN            |
    |  * PREVENT HEADACHES            |
    |  * IMPROVE FOCUS                |
    |                                 |
    +---------------------------------+
  `}
    </pre>
  )
}

export function InterfaceArt() {
  return (
    <pre className="overflow-hidden">
      {`
+-------------------------------+
|                               |
|     [LookawayApp Interface]   |
|                               |
+-------------------------------+
|                               |
|  Work Duration: [00:20:00]    |
|  Break Duration: [00:00:20]   |
|                               |
|  [Set Timer]                  |
|                               |
|  Reminder: [00:05:00]         |
|                               |
|  [Set Reminder]               |
|                               |
|  Timer: 00:19:45              |
|                               |
|  [Start] [Stop]               |
|                               |
+-------------------------------+
`}
    </pre>
  )
}

