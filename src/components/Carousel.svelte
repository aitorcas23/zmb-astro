<script lang="ts">
	import * as Carousel from "@components/ui/carousel/index";
	import Autoplay from "embla-carousel-autoplay";

	interface Slide {
		title: string;
		image: string;
		alt: string;
		link: string;
		linkText: string;
		description?: string;
	}

	export let slides: Slide[];
</script>

<div class="pt-8 sm:p-8">
	<Carousel.Root
		opts={{
			loop: true,
		}}
		plugins={[
			Autoplay({
				delay: 6000,
			}),
		]}
	>
		<Carousel.Content>
			{#each slides as slide}
				<Carousel.Item>
					<div class="relative">
						<div
							class="absolute left-2 top-2 sm:left-4 sm:top-4 max-w-[75%] bg-black/30 p-2 pb-3 sm:p-4 sm:pb-5 lg:p-6 lg:pb-7 xl:p-8 xl:pb-9"
						>
							<h2
								class="text-2xl font-semibold uppercase text-white sm:text-3xl md:text-4xl md:font-bold leading-7"
							>
								{slide.title}
							</h2>
							{#if slide.description}
								<p class="text-xs text-gray-200 sm:text-sm md:text-base xl:text-xl">
									{slide.description}
								</p>
							{/if}
							<p class="mt-3 text-sm md:text-base">
								<a
									href={slide.link}
									class="transition-color rounded-lg border-2 border-white px-2 py-1 text-center text-xs font-medium text-white duration-150 ease-out hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 sm:text-sm md:px-4 md:py-2 xl:text-lg"
								>
									{slide.linkText}
								</a>
							</p>
						</div>
						<img
							src={slide.image}
							alt={slide.alt}
							class="aspect-video h-full w-full select-none object-cover object-center md:aspect-[21/9]"
							draggable="false"
							loading="lazy"
							decoding="async"
						/>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous class="hidden sm:flex" />
		<Carousel.Next class="hidden sm:flex" />
	</Carousel.Root>
</div>
