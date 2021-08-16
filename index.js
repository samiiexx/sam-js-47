// Copyright 2021 sfchi
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-img')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Adaugo Bello',
        position: 'Director',
        photo: 'https://randomuser.me/api/portraits/women/43.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias est aliquam repellat culpa harum quidem ipsam officia, laborum libero inventore exercitationem numquam natus vel provident! Vel maxime quisquam iste soluta explicabo hic, ducimus quos tenetur amet odit, fugit aut eligendi unde, placeat dolore quae obcaecati enim assumenda molestiae. Cupiditate, impedit?',

    },
    {
        name: 'Amara Chukwu',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/41.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias est aliquam repellat culpa harum quidem ipsam officia, laborum libero inventore exercitationem numquam natus vel provident! Vel maxime quisquam iste soluta explicabo hic, ducimus quos tenetur amet odit, fugit aut eligendi unde, placeat dolore quae obcaecati enim assumenda molestiae. Cupiditate, impedit?',

    },
    {
        name: 'Obioma Esther',
        position: 'Designer',
        photo: 'https://randomuser.me/api/portraits/women/39.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias est aliquam repellat culpa harum quidem ipsam officia, laborum libero inventore exercitationem numquam natus vel provident! Vel maxime quisquam iste soluta explicabo hic, ducimus quos tenetur amet odit, fugit aut eligendi unde, placeat dolore quae obcaecati enim assumenda molestiae. Cupiditate, impedit?',

    },
]

let idx = 1

function updateTestimonial() {
   const { name, position, photo, text } = testimonials[idx]

   testimonial.innerHTML = text
   userImage.src = photo
   username.innerHTML = name
   role.innerHTML = position

   idx++

   if(idx > testimonials.length - 1) {
       idx = 0
   }
}

setInterval(updateTestimonial, 5000)