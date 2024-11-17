"use client";
import { builder, Builder } from "@builder.io/react";
import Background from "./app/components/Hero";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Background, {
  name: "Background",
});
