[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">

<h3 align="center">eGPX - Efficient GPX</h3>

  <p align="center">
    eGPX is designed for applications where bytesize is key, from database storage to implementations on navigational devices. It is optimized for performance removing all the boilerplate from GPX.
    <br />
    <a href="https://github.com/letsmoe/eGPX"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/letsmoe/eGPX">View Demo</a>
    ·
    <a href="https://github.com/letsmoe/eGPX/issues">Report Bug</a>
    ·
    <a href="https://github.com/letsmoe/eGPX/issues">Request Feature</a>
  </p>
</div>

- [About The Project](#about-the-project)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## About The Project

eGPX was designed to optimize performance for exchangable GPX files. It is fully inspired by the original [GPX specification](https://www.topografix.com/GPX/1/1/gpx.xsd) which is an XML based exchange format for geopositional data.

However, the XML part of GPX leads to a lot of boilerplate and inefficient use of available storage on devices which already have a lot less of it than is common on modern Smartphones or Computers.

The [Foretrex 601](https://www.garmin.com/de-DE/p/572639) for example only has 8MB of available memory for storing tracks. A 500km track requires ~1.6MB of storage using the GPX format, this drastically limits the number of checkpoints that can be stored making it unappealing for longer routes.

A site like [CyclersHub.com](https://cyclershub.com) needs to store a lot of user submitted tracks, eGPX can improve GPX file size **by up to 7 times**, thus saving prescious space in their database!

## Getting Started

This repo comes with a pre-built eGPX parser. Simply run:

```bash
npm install
tsc build
```

and run the example with:

```bash
node example.js
```

## Roadmap

- [x] Basic Positional Data support.
- [ ] Full GPX feature support
  - [ ] Author Info
  - [ ] Additional Metadata

See the [open issues](https://github.com/letsmoe/eGPX/issues) for a full list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

[contributors-shield]: https://img.shields.io/github/contributors/letsmoe/eGPX.svg?style=for-the-badge
[contributors-url]: https://github.com/letsmoe/eGPX/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/letsmoe/eGPX.svg?style=for-the-badge
[forks-url]: https://github.com/letsmoe/eGPX/network/members
[stars-shield]: https://img.shields.io/github/stars/letsmoe/eGPX.svg?style=for-the-badge
[stars-url]: https://github.com/letsmoe/eGPX/stargazers
[issues-shield]: https://img.shields.io/github/issues/letsmoe/eGPX.svg?style=for-the-badge
[issues-url]: https://github.com/letsmoe/eGPX/issues
[license-shield]: https://img.shields.io/github/license/letsmoe/eGPX.svg?style=for-the-badge
[license-url]: https://github.com/letsmoe/eGPX/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
