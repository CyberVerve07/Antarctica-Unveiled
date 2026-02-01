"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { year: "1993", "Sea Level Rise (mm)": 0 },
  { year: "1998", "Sea Level Rise (mm)": 15 },
  { year: "2003", "Sea Level Rise (mm)": 30 },
  { year: "2008", "Sea Level Rise (mm)": 45 },
  { year: "2013", "Sea Level Rise (mm)": 60 },
  { year: "2018", "Sea Level Rise (mm)": 80 },
  { year: "2023", "Sea Level Rise (mm)": 102 },
];

const chartConfig = {
  seaLevel: {
    label: "Sea Level Rise (mm)",
    color: "hsl(var(--accent))",
  },
};

export function ClimateChart() {
  return (
    <Card className="my-16 bg-transparent border-primary/20">
      <CardHeader>
        <CardTitle className="text-primary font-headline">Global Sea Level Rise</CardTitle>
        <CardDescription>
          Cumulative change in global average sea level from 1993 to 2023, primarily due to glacier melt and thermal expansion.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border)/0.5)" />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value}
              stroke="hsl(var(--foreground))"
            />
             <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              stroke="hsl(var(--foreground))"
              domain={[0, 'dataMax + 20']}
            />
            <Tooltip
              cursor={{ fill: 'hsl(var(--accent)/0.1)', stroke: 'hsl(var(--accent))' }}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <defs>
              <linearGradient id="fillSeaLevel" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={chartConfig.seaLevel.color}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={chartConfig.seaLevel.color}
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="Sea Level Rise (mm)"
              type="natural"
              fill="url(#fillSeaLevel)"
              stroke={chartConfig.seaLevel.color}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
