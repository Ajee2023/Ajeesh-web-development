import requests
from bs4 import BeautifulSoup
import urllib.parse
import webbrowser

def google_image_search(query, num_images=1):
    """
    Performs a Google Image search and returns a list of image URLs.

    Args:
        query: The search query.
        num_images: The number of images to retrieve.

    Returns:
        A list of image URLs, or an empty list if no images are found.
        Also opens the first image in the default web browser.
    """

    query = query.replace(" ", "+")  # Replace spaces with plus signs for URL
    url = f"https://www.google.com/images?q={query}&tbm=isch"

    try:
        response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})  # Important: Use a User-Agent
        response.raise_for_status() # Raise an exception for bad status codes (4xx or 5xx)

        soup = BeautifulSoup(response.content, "html.parser")
        image_tags = soup.find_all("img", class_="rg_i") # The class might change, inspect Google Images to get the current class

        image_urls = []
        for i, img_tag in enumerate(image_tags):
            if i >= num_images:
                break
            try:  # Handle potential issues with missing 'src' or 'data-src'
                image_url = img_tag.get('src') or img_tag.get('data-src')

                if image_url:
                    image_urls.append(image_url)

            except Exception as e:
                print(f"Error extracting URL: {e}")
                continue


        if image_urls:
            print(f"Found {len(image_urls)} image URLs.")
            if image_urls[0]: # Open the first image in the browser
                webbrowser.open_new_tab(image_urls[0])
        else:
            print("No images found for your search.")

        return image_urls

    except requests.exceptions.RequestException as e:
        print(f"Error during search request: {e}")
        return []
    except Exception as e:
        print(f"A general error occurred: {e}") # Catch any other unexpected errors
        return []


if __name__ == "__main__":
    search_term = input("Enter your image search query: ")
    num_to_find = int(input("How many images do you want to find (default is 1): ") or 1) # Allow user to specify number of images
    found_urls = google_image_search(search_term, num_to_find)

    if found_urls:
        print("\nImage URLs:")
        for url in found_urls:
            print(url)