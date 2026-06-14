{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/release-26.05";
  inputs.flake-parts.url = "github:hercules-ci/flake-parts";

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } (
      top@{ config, withSystem, ... }:
      {
        systems = [ "x86_64-linux" ];
        perSystem =
          { config, pkgs, ... }:
          {
            devShells.default = pkgs.mkShell {
              packages = with pkgs; [
                nodejs_24
                pnpm
              ];
            };
          };
      }
    );
}
